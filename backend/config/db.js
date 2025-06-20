const { Sequelize } = require('sequelize');
require('dotenv').config(); // Asegura que las variables de entorno se carguen

// Añadimos console.log para depurar los valores de las variables de entorno
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '********' : '[VACÍO]'); // No imprimas la contraseña real por seguridad
console.log('DB_NAME:', process.env.DB_NAME);


const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = sequelize;