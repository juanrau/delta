
(
echo const express = require('express');
echo const cors = require('cors');
echo const morgan = require('morgan');
echo const helmet = require('helmet');
echo const contactoRoutes = require('./routes/contacto');
echo const sequelize = require('./config/db');
echo 
echo const app = express();
echo 
echo app.use(cors());
echo app.use(helmet());
echo app.use(morgan('dev'));
echo app.use(express.json());
echo 
echo app.use('/api/contacto', contactoRoutes);
echo 
echo const PORT = process.env.PORT || 5000;
echo 
echo app.listen(PORT, async () => {
echo   console.log(`Servidor corriendo en puerto ${PORT}`);
echo   try {
echo     await sequelize.authenticate();
echo     console.log('Conexión a la base de datos establecida.');
echo   } catch (error) {
echo     console.error('No se pudo conectar a la base de datos:', error);
echo   }
echo });
) > server.js