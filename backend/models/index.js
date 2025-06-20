// models/index.js (EJEMPLO)
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize'); // Importa Sequelize si aún no lo has hecho
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; // O tu entorno
const config = require(__dirname + '/../config/db.js'); // Importa tu configuración de DB

const sequelize = config; // Aquí usamos la instancia de Sequelize directamente de db.js

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db; // Exporta el objeto 'db' que contiene todos tus modelos