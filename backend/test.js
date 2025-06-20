const initModels = require('./models');
const { Contacto } = initModels(require('./config/db'));

(async () => {
    try {
        await Contacto.create({
            nombre: 'Test',
            email: 'test@example.com',
            mensaje: 'Prueba desde test.js'
        });
        console.log("✅ Registro creado exitosamente");
    } catch (err) {
        console.error("❌ Error creando registro:", err.message);
    }
})();