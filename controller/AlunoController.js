const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require('express-session');
const router = express.Router();
const connection = require("../database/database");

const modelAluno = require("../model/AlunoModel");

router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


router.get("/home", (req, res)=>{
    modelAluno.findAll()
        .then(
            ()=>{
                res.render('index')
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

router.get("/aluno", (req, res)=>{
    modelAluno.findAll()
        .then(
            (alunos)=>{
                res.render('aluno', {alunos : alunos})
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

router.post("/inserirAluno", async(req, res)=>{
    // RECEBER OS DADOS
    let {RM, NM_ALUNO, CPF_ALUNO, TEL_ALUNO, EMAIL_ALUNO, ID_TURMA_ALUNO} = req.body;
    let SENHA_ALUNO = await bcrypt.hash(req.body.SENHA_ALUNO, 8);

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

router.get("/login", (req, res)=>{
    if(req.session.RM){
        res.render('index')
    }
    res.render('login')

});

router.post("/login", async(req, res)=>{
    let {RM, SENHA_ALUNO} = req.body
    const usuario = await modelAluno.findOne({
        attribites: ["RM", "NOME", "E-MAIL", "SENHA"],
        where:{RM, SENHA_ALUNO}
    });

    if(!usuario){
        console.log(RM)
        return res.send({mensagem: "Usuário ou senha incorretos!!"})
    }

    bcrypt.compare(SENHA_ALUNO, usuario.SENHA_ALUNO, (err, result)=>{
        if(result){
            return res.send({mensagem: "FALHA LOGIN"})
        } else{
        //     const token = jwt.sign({
        //         RM: usuario.RM,
        //         NM_ALUNO: usuario.NM_ALUNO,
        //         EMAIL_ALUNO: usuario.EMAIL_ALUNO,
        //         expiresIn: "1h"
        //     }
        //  )
            return res.redirect(
                ('http://localhost:8070/home')
            )
        }
    })   
    
});

router.put("/alterarAluno", async(req, res)=>{
    // RECEBER DADOS
    let {RM, NM_ALUNO, CPF_ALUNO, TEL_ALUNO, EMAIL_ALUNO, ID_TURMA_ALUNO} = req.body;
    let SENHA_ALUNO = await bcrypt.hash(req.body.SENHA_ALUNO, 8);

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