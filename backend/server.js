const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
// CORRECCIÓN: Apunta al nombre de archivo correcto en la carpeta 'routes'.
const contactoRoutes = require('./routes/contactoRoutes'); 
const sequelize = require('./config/db');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/contacto', contactoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
});