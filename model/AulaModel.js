const Sequelize = require("sequelize");

const connection = require("../database/database");

const Dia_Hora = require("./HorarioModel")


const Aula = connection.define(
    "tb_aulas",
    {
        ID_AULA:{
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        DIA:{
            type: Sequelize.DATE,
            allowNull: false
        },
        STATUS_AULA:{
            type: Sequelize.STRING(11),
            allowNull: false
        }
    }
);

Dia_Hora.hasMany(Dia_Hora, {
    foreignKey: 'ID_HORARIO_AULA'
});


// Aula.sync({force:true});

module.exports = Aula;