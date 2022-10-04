const express = require("express");

const router = express.Router();

const modelProfessor = require("../model/ProfessorModel");


router.post("/inserirProfessor", (req, res)=>{
    // RECEBER OS DADOS
    let {rm_professor, nome_professor, cpf_professor, telefone_professor} = req.body;

    // GRAVAR DADOS
    modelProfessor.create(
        {
            rm_professor,
            nome_professor,
            cpf_professor,
            telefone_professor
        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "Professor inserido com sucesso!!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao inserir professor!!",
                erroBancoDados: erro
            });
        }
    );
});

module.exports = router;