const Sequelize = require('sequelize');
const connection = require('../database/database');

const Usuario = connection.define(
    'tb_alunos',
    {
        rm:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nm_aluno:{
            type: Sequelize.STRING(250),
            allowNull: false,
        }
    }
);

// Usuario.sync({force:true});

module.exports = Usuario;