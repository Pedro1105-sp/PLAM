const express = require("express");

const router = express.Router();

const modelAluno = require("../model/AlunoModel");

router.get("/listarAlunos", (req, res)=>{
    modelAluno.findAll()
        .then(
            (alunos)=>{
                return res.status(200).json(alunos);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do aluno',
                    erroBancoDados: erro
                });
            }
        );
});

router.post("/inserirAluno", (req, res)=>{
    // RECEBER OS DADOS
    let {RM, NM_ALUNO, CPF_ALUNO, TEL_ALUNO, EMAIL_ALUNO, SENHA_ALUNO, ID_TURMA_ALUNO} = req.body;

    // GRAVAR DADOS
    modelAluno.create(
        {
            RM,
            NM_ALUNO,
            CPF_ALUNO,
            TEL_ALUNO,
            EMAIL_ALUNO,
            SENHA_ALUNO,
            ID_TURMA_ALUNO
        }
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus: false,
                menssagemStatus: "Aluno inserida com sucesso!!"
            });
        }
    ).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao inserir aluno!!",
                erroBancoDados: erro
            });
        }
    );
});

router.put("/alterarAluno", (req, res)=>{
    // RECEBER DADOS
    let {RM, NM_ALUNO, CPF_ALUNO, TEL_ALUNO, EMAIL_ALUNO, SENHA_ALUNO, ID_TURMA_ALUNO} = req.body;

    // ALTERAR DADOS
    modelAluno.update(
        {
            RM,
            NM_ALUNO,
            CPF_ALUNO,
            TEL_ALUNO,
            EMAIL_ALUNO,
            SENHA_ALUNO,
            ID_TURMA_ALUNO
        },
        {where:{RM}}
    ).then(()=>{
        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: "Dados do aluno alterado com sucesso!!"
        });
    }).catch(
        (erro)=>{
            return res.status(400).json({
                erroStatus: true,
                menssagemStatus: "Erro ao alterar os dados do aluno!!",
                erroBancoDados: erro
            });
        }
    );
});

router.delete("/excluirAluno/:id", (req, res)=>{
    // RECEBER DADOS
    let {RM} = req.params;

    // DELETAR DADOS
    modelAluno.destroy(
        {where: {RM}}
    ).then(()=>{
        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: "Exclusão de aluno feita com sucesso!!"
        });
    }).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    menssagemStatus: "Erro ao excluir aluno!!",
                    erroBancoDados: erro
                })
            }
        )
    
});

module.exports = router;