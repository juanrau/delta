const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Contacto', {
        nombre: DataTypes.STRING,
        email: DataTypes.STRING,
        telefono: DataTypes.STRING,
        mensaje: DataTypes.TEXT
    }, {
        timestamps: false  // 👈 Añade esta línea
    });
};