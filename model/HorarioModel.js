const Sequelize = require("sequelize");

const connection = require("../database/database");

const Horario = connection.define(
    "tb_horario_aulas",
    {
        DIA:{
            type: Sequelize.INTEGER(4),
            allowNull: false
        },
        STATUS_AULA:{
            type: Sequelize.INTEGER(11),
            allowNull: false
        }
    }
);

// Curso.hasMany(Turma, {
//     foreignKey: 'ID_CURSO_TURMA '
//   });


// Aula.sync({force:true});

module.exports = Turma;