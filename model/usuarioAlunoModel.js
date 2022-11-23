const Sequelize = require("sequelize");

const connection = require("../database/database");


const UsuarioAluno = connection.define(
    "tb_usuario_alunos",
    {
        EMAIL_ALUNO:{
            type: Sequelize.STRING(45),
            allowNull: false,
            primaryKey: true
        },
        SENHA_ALUNO:{
            type: Sequelize.STRING(45),
            allowNull: false
        }
    }
);

/*Importação para criação da chave estrangeira
representanto a cardinalidade*/
const Aluno = require('./AlunoModel');

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/

Aluno.hasMany(UsuarioAluno, {
  foreignKey: 'ID_ALUNO_USUARIO'
});



//Aluno.sync({force:true});

module.exports = UsuarioAluno;