const Sequelize = require("sequelize");

const connection = require("../database/database");

const Curso = connection.define(
    "tb_cursos",
    {
        ID_CURSO :{
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        NM_CURSO:{
            type: Sequelize.STRING(45),
            allowNull: false
        }
    }
);

// Curso.sync({force:true});

module.exports = Curso;