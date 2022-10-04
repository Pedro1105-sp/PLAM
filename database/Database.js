const Sequelize = require('sequelize');

const connection = new Sequelize(
    'BD_TCC',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;