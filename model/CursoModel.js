const Sequelize = require("sequelize");

const connection = require("../database/database");

const Curso = connection.define(
  "TB_CURSOS",

  {
    nome_curso: {
      type: Sequelize.STRING(45),
    },
  }
);

// Curso.sync({force:true});

module.exports = Curso;
