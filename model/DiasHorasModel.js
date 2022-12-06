const Sequelize = require("sequelize");

const connection = require("../database/database");

const Dia_Hora = connection.define(
    "tb_dias_horas",
    {
        ID_DIAS_HORAS :{
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        DIAS:{
            type: Sequelize.INTEGER(4),
            allowNull: false
        },
        HORA:{
            type: Sequelize.INTEGER(11),
            allowNull: false
        }
    }
);


//  Dia_Hora.sync({force:true});

module.exports = Dia_Hora;