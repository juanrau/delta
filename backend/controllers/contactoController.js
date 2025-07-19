// Carga las variables de entorno al inicio del archivo
require('dotenv').config();

// Asumo que esta importación es correcta para cargar todos tus modelos
// La función `require('../models')` debería devolver un objeto con todos los modelos definidos,
// y `Contacto` sería una propiedad de ese objeto.
const db = require('../models'); // Importamos el objeto 'db' completo que contiene tus modelos

const nodemailer = require('nodemailer'); // Importa Nodemailer
const axios = require('axios');       // Importa Axios para la verificación de reCAPTCHA
const validator = require('validator');

const verificarRecaptcha = async (token) => {
    try {
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
        const response = await axios.post(verificationUrl);
        return response.data;
    } catch (error) {
        console.error('Error al verificar reCAPTCHA:', error);
        return { success: false, 'error-codes': ['recaptcha-verification-failed'] };
    }
};

exports.enviarMensaje = async (req, res) => {
    // Desestructuramos los datos del cuerpo de la solicitud, incluyendo el token de reCAPTCHA
    const { nombre, email, telefono, mensaje, recaptchaToken } = req.body;

    // --- 1. Verificación de reCAPTCHA (¡Paso crítico y el primero!) ---
    // Si no recibimos un token, significa que el reCAPTCHA no se completó en el frontend.
    if (!recaptchaToken) {
        return res.status(400).json({ message: 'reCAPTCHA no verificado. Por favor, completa la verificación.' });
    }

    const recaptchaResult = await verificarRecaptcha(recaptchaToken);

    if (!recaptchaResult.success || recaptchaResult.hostname !== 'localhost') {
        return res.status(400).json({ message: 'Verificación de reCAPTCHA fallida. Parece que eres un bot o algo salió mal.' });
    }

    // --- 2. Validación y Saneamiento de Datos del Formulario ---
    // Estas validaciones se ejecutan SOLAMENTE si la verificación de reCAPTCHA fue exitosa.
    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ message: 'Nombre, Email y Mensaje son campos obligatorios.' });
    }
    // Regex simple para validar el formato básico del email
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'El formato del email es inválido.' });
    }
    // Limitamos la longitud de los campos para prevenir ataques de desbordamiento o spam masivo
    if (nombre.length > 100 || email.length > 100 || (telefono && telefono.length > 50) || mensaje.length > 1500) {
        return res.status(400).json({ message: 'La longitud de uno o más campos excede el límite permitido.' });
    }

    // Saneamiento de entradas: Eliminamos saltos de línea para prevenir la inyección de encabezados de email.
    // Esto es crucial para la seguridad, ya que un atacante podría añadir Bcc, Cc, etc.
    const cleanEmail = email.replace(/(\r\n|\n|\r)/gm, "");
    const cleanNombre = nombre.replace(/(\r\n|\n|\r)/gm, "");
    const cleanMensaje = mensaje; // Nodemailer maneja bien el cuerpo del mensaje HTML/texto plano directamente

    // --- 3. Configuración del Transporter de Nodemailer ---
    // Aquí configuramos cómo Nodemailer se conectará al servidor de correo para enviar el email.
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Usamos 'gmail' como un ejemplo. Puedes cambiarlo a tu proveedor ('Outlook365', 'SMTP' con host/port)
        auth: {
            user: process.env.EMAIL_USER, // Tu email de envío, cargado desde .env
            pass: process.env.EMAIL_PASS  // Tu contraseña/contraseña de aplicación, cargada desde .env
        }
    });

    // Opcional: Configuración para servicios de email transaccional (como SendGrid, Mailgun, etc.)
    // Estos servicios son recomendados para producción por su entregabilidad y monitoreo.
    /*
    const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net", // Ejemplo para SendGrid
        port: 587,
        secure: false, // false para puertos como 587 (TLS/STARTTLS)
        auth: {
            user: 'apikey', // El usuario para SendGrid es 'apikey'
            pass: process.env.SENDGRID_API_KEY // Tu API Key de SendGrid cargada desde .env
        }
    });
    */

    // --- 4. Opciones del Correo a Enviar ---
    const mailOptions = {
        // El campo 'from' muestra quién envía el correo. Aquí se muestra el nombre y email del remitente del formulario.
        from: `"${cleanNombre}" <${cleanEmail}>`, 
        // El campo 'to' es el email de destino, a donde quieres que lleguen los mensajes de contacto.
        to: process.env.TARGET_EMAIL, // Esto es 'juan.gutierrezcalquin@gmail.com'
        // Asunto del correo, incluyendo el nombre de quien contacta para fácil identificación.
        subject: `Nuevo Mensaje de Contacto desde Delta Tecnologías - ${cleanNombre}`,
        // El cuerpo del correo en formato HTML para una mejor presentación
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #002244;">¡Has recibido un nuevo mensaje de contacto!</h2>
                <p><strong>Nombre:</strong> ${cleanNombre}</p>
                <p><strong>Email:</strong> ${cleanEmail}</p>
                <p><strong>Teléfono:</strong> ${telefono ? telefono : '<em>No proporcionado</em>'}</p>
                <h3 style="color: #002244;">Mensaje:</h3>
                <p style="white-space: pre-wrap; background-color: #f8f8f8; padding: 15px; border-left: 5px solid #002244; border-radius: 5px;">${cleanMensaje}</p>
                <br>
                <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web <a href="https://www.deltatecnologias.cl" style="color: #002244; text-decoration: none;">Delta Tecnologías</a>.</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 0.8em; color: #666;">Por favor, responde directamente a ${cleanEmail}.</p>
            </div>
        `
    };

    // --- 5. Envío del Correo y Guardado en la Base de Datos ---
    try {
        // Primero intentamos enviar el correo
        await transporter.sendMail(mailOptions);
        console.log('Correo de contacto enviado con éxito a:', process.env.TARGET_EMAIL);

        // Si el correo se envió correctamente, entonces guardamos el mensaje en la base de datos
        // Accedemos al modelo Contacto a través del objeto `db` importado.
        await db.Contacto.create({ nombre, email, telefono, mensaje });
        console.log('Mensaje guardado en la base de datos.');
        
        // Enviamos una respuesta de éxito al frontend
        res.status(200).json({ message: 'Mensaje enviado correctamente y correo de confirmación enviado.' });
    } catch (error) {
        // Capturamos cualquier error durante el envío del correo o el guardado en DB
        console.error('Error al enviar el correo o guardar el mensaje en DB:', error);
        // Enviamos un mensaje de error genérico al frontend por seguridad (no revelamos detalles internos)
        res.status(500).json({ error: 'Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.' });
    }
};