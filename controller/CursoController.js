const express = require("express");

const router = express.Router();

const modelCurso = require("../model/CursoModel");

router.post("/inserirCurso", (req, res)=>{
    // RECEBER OS DADOS
    let {nome_curso} = req.body;

    // GRAVAR DADOS
    modelCurso.create(
        {
            nome_curso
        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "Curso inserido com sucesso!!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao inserir Curso!!",
                erroBancoDados: erro
            });
        }
    );
});

module.exports = router;