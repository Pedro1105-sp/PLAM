const Sequelize = require("sequelize");

const connection = require("../database/database");

const Professor = require('./ProfessorDisciplinaModel');

const Dia_Hora = require("./DiasHorasModel");

const Horario = connection.define(
    "tb_horario_aulas",
    {
        ID_HORARIO:{
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    }  
);

Professor.hasMany(Professor, {
    foreignKey: 'ID_DISCIPLINA_PROFESSOR_AULA'
});

Dia_Hora.hasMany(Dia_Hora, {
    foreignKey: 'ID_DIA_AULA'
});

// Horario.sync({force:true});

module.exports = Horario;