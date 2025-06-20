(
//  const express = require('express');
//  const cors = require('cors');
//  const morgan = require('morgan');
//  const helmet = require('helmet');
//  const contactoRoutes = require('./routes/contacto');
//  const sequelize = require('./config/db');import express from 'express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import contactoRoutes from './routes/contacto.js';
import sequelize from './config/db.js';
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
