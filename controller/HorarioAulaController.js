const express = require("express");

const router = express.Router();

const modelHorario = require("../model/HorarioModel");

router.post("/insertHoras", (req, res)=>{
    let {ID_HORARIO, ID_DISCIPLINA_PROFESSOR_AULA, ID_DIA_AULA} = req.body;
    modelHorario.create(
        {
            ID_HORARIO,
            ID_DISCIPLINA_PROFESSOR_AULA,
            ID_DIA_AULA
        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "Horario inserida com sucesso!!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao inserir horario!!",
                erroBancoDados: erro
            });
        }
    );
});

module.exports = router;