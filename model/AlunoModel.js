const Sequelize = require("sequelize");

const connection = require("../database/database");

/*Importação da tabela de categoria para criação da chave estrangeira
representanto a cardinalidade*/
const Turma = require('./TurmaModel');

const Aluno = connection.define(
    "tb_alunos",
    {
        RM:{
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        NM_ALUNO:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
        CPF_ALUNO:{
            type: Sequelize.STRING(11),
            allowNull: false
        },
        TEL_ALUNO:{
            type: Sequelize.STRING(11),
            allowNull: false
        },
        
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/

Turma.hasMany(Aluno, {
  foreignKey: 'ID_TURMA_ALUNO'
});



//Aluno.sync({force:true});

module.exports = Aluno;