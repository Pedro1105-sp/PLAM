const Sequelize = require("sequelize");

const connection = require("../database/database");

const Curso = require('./CursoModel');

const Turma = connection.define(
    "tb_turmas",
    {
        ID_TURMA :{
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        ANO:{
            type: Sequelize.INTEGER(4),
            allowNull: false
        },
        SEMESTRE:{
            type: Sequelize.INTEGER(11),
            allowNull: false
        }
    }
);

// Curso.hasMany(Turma, {
//     foreignKey: 'ID_CURSO_TURMA '
//   });


// Turma.sync({force:true});

module.exports = Turma;