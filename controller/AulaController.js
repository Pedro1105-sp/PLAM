const express = require("express");

const router = express.Router();

const modelAula = require("../modeL/AulaModel");
const modelAluno = require("../model/AlunoModel");

router.post("/insertAula", (req, res)=>{
    let {ID_AULA, DIA, STATUS_AULA,ID_HORARIO_AULA} = req.body;
    modelAula.create(
        {
            ID_AULA,
            DIA,
            STATUS_AULA,
            ID_HORARIO_AULA
        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "Aula inserida com sucesso!!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao inserir aula!!",
                erroBancoDados: erro
            });
        }
    );
});




module.exports = router;