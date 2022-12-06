const Sequelize = require("sequelize");

const connection = require("../database/database");
const Professor = require("./ProfessorModel");
const Disciplina = require("./DisciplinaModel");


const Professor_Disciplina = connection.define(
    "professor_disciplinas",
    {
        ID_DISCIPLINA_PROFESSOR:{
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true            
        },
    }
);

Professor.hasMany(Professor, {
    foreignKey: 'ID_PROFESSOR'
});

Disciplina.hasMany(Disciplina, {
    foreignKey: 'ID_DISCIPLINA'
});


// Professor_Disciplina.sync({force:true});



module.exports = Professor_Disciplina;