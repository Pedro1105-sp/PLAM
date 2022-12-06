const Sequelize = require("sequelize");

const connection = require("../database/database");
const Aluno = require("./AlunoModel");
const Aula = require("./AulaModel ")


const Presenca = connection.define(
    "tb_presencas",
    {
        ID_PRESENCA :{
            type: Sequelize.STRING(1),
            allowNull: false,
            primaryKey: true
        },
    }
);

Aluno.hasMany(Aluno, {
    foreignKey: 'ID_AULA_PRESENCA'
});

Aula.hasMany(Aula, {
    foreignKey: 'ID_ALUNO_PRESENCA'
});



module.exports = Presenca;