const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
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
        EMAIL_ALUNO: {
            type: Sequelize.STRING(70),
            allowNull: false
        },
        SENHA_ALUNO: {
            type: Sequelize.STRING(45),
            allowNull: false
        }
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/

Turma.hasMany(Aluno, {
  foreignKey: 'ID_TURMA_ALUNO'
});

/* Criptografando senha antes de salvar  */

// Aluno.addHook('beforeSave', async next => {
//     const hash = await bcrypt.hash(Aluno.SENHA_ALUNO, 10);
//     Aluno.SENHA_ALUNO = hash;

//     next();
// });


//Aluno.sync({force:true});

module.exports = Aluno;