const express = require("express");

const router = express.Router();

const modelAluno = require("../model/AlunoModel");
const bcrypt = require("bcryptjs");
//const { where } = require("sequelize");


router.get("/chamada", (req, res)=>{
    modelAluno.findAll()
        .then(
            (alunos)=>{
                res.render('chamada', {alunos : alunos})
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



router.post('/authenticate', async (req, res) => {
    const {RM, SENHA_ALUNO} = req.body;

    const user = await modelAluno.findOne({ RM });

    if(!user){
        return res.send(400).send({error: 'User not found!'})
    }

    if(!await bcrypt.compare(SENHA_ALUNO, user.SENHA_ALUNO)){
        return res.send(user)
        //.send({error: 'Invalid password!'})
    }

    res.send({user})
 })


// router.post("/teste", async(req, res)=>{
//     const user = await modelAluno.findOne({
//         where:{RM: req.body, SENHA_ALUNO: req.body}
//     });
//     if(user === null){
//         res.send(JSON.stringify("error"))
//     } else{
//         res.send(user)
//     }
// })


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