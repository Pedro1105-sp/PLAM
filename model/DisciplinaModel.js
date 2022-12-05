const Sequelize = require("sequelize");

const connection = require("../database/database");

const Disciplina = connection.define(
    "tb_disciplinas",
    {
        NM_DISCIPLINA:{
            type: Sequelize.STRING(45),
            allowNull: false
        }
    }
);

// Curso.hasMany(Turma, {
//     foreignKey: 'ID_CURSO_TURMA '
//   });


// Disciplina.sync({force:true});

module.exports = Turma;