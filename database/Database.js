const Sequelize = require('sequelize');

const connection = new Sequelize(
    'BD_TCC',
    'root',
    'lariLind@19',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;