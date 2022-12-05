const Sequelize = require("sequelize");

const connection = require("../database/database");

const Curso = require('./CursoModel');

const Horario = connection.define(
    "tb_horario_aulas",
    {

    }
);

// Curso.hasMany(Turma, {
//     foreignKey: 'ID_CURSO_TURMA '
//   });


// Horario.sync({force:true});

module.exports = Turma;