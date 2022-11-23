const express = require("express");

const router = express.Router();

const modelTurma = require("../model/TurmaModel");

router.get("/listarTurmas", (req, res)=>{
    modelTurma.findAll()
        .then(
            (cursos)=>{
                return res.status(200).json(cursos);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados da Turma',
                    erroBancoDados: erro
                });
            }
        );
});

module.exports = router;