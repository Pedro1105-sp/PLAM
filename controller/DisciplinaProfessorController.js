const express = require("express");

const router = express.Router();

const modelDiscProf = require("../model/ProfessorDisciplinaModel");

router.post("/insertDiscProf", (req, res)=>{
    let {ID_PROFESSOR, ID_DISCIPLINA} = req.body;
    
    modelDiscProf.create(
        {
            ID_PROFESSOR,
            ID_DISCIPLINA
        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "DiscProf inserida com sucesso!!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao inserir DiscProf!!",
                erroBancoDados: erro
            });
        }
    );
});

module.exports = router;