const express = require("express");

const router = express.Router();

const modelCurso = require("../model/CursoModel");

router.get("/listarCursos", (req, res)=>{
    modelCurso.findAll()
        .then(
            (cursos)=>{
                return res.status(200).json(cursos);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do Curso',
                    erroBancoDados: erro
                });
            }
        );
});

module.exports = router;