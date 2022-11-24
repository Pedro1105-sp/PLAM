const express = require("express");

const router = express.Router();

const modelUsuarioAluno = require("../model/usuarioAlunoModel");

router.get("/listarUsuarioAluno", (req, res)=>{
    modelUsuarioAluno.findAll()
        .then(
            (usuarioAluno)=>{
                return res.status(200).json(usuarioAluno);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do Usuário do Aluno',
                    erroBancoDados: erro
                });
            }
        );
});


router.post("/inserirUsuarioAluno", (req, res)=>{
    // RECEBER OS DADOS
    let {EMAIL_ALUNO, SENHA_ALUNO, ID_ALUNO_USUARIO} = req.body;

    // GRAVAR DADOS
    modelUsuarioAluno.create(
        {
            EMAIL_ALUNO,
            SENHA_ALUNO,
            ID_ALUNO_USUARIO
        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "Usuário Aluno inserida com sucesso!!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao inserir usuário do aluno!!",
                erroBancoDados: erro
            });
        }
    );
});

module.exports = router;