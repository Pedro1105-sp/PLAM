const Sequelize = require("sequelize");

const connection = require("../database/database");


const Professor = connection.define(
    "tb_professores",
    {
        RM_PROFESSOR :{
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        NM_PROFESSOR:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
        CPF_PROFESSOR:{
            type: Sequelize.STRING(11),
            allowNull: false
        },
        TEL_PROFESSOR:{
            type: Sequelize.STRING(11),
            allowNull: false
        },
        EMAIL_PROFESSOR: {
            type: Sequelize.STRING(70),
            allowNull: false
        },
        SENHA_PROFESSOR: {
            type: Sequelize.STRING(45),
            
    }
});



 //Professor.sync({force:true});

module.exports = Professor;