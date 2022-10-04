const Sequelize = require("sequelize");

const connection = require("../database/Database");

const Professor = connection.define(
  "TB_PROFESSOR",
  {
    rm_professor:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome_professor: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },

    cpf_professor: {
      type: Sequelize.STRING(14),
      allowNull: false,
    },

    telefone_professor: {
      type: Sequelize.STRING(14),
      allowNull: false,
    },
  }
);

// Professor.sync({force:true});

module.exports = Professor;
