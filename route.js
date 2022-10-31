const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const db = require('./db');
const mysql = require("./mysql").pool
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.get(
    "/listagemCursos", async (request,response)=>{
        const dados = await db.selectTb();
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.get(
    "/listagemDisciplina", async (request,response)=>{
        const dados = await db.selectTbDiscilina();
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.get(
    "/listagemAluno", async (request,response)=>{
        const dados = await db.selectTbAluno();
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.post(  
    "/aluno/:rm", async (request,response) => {
        const {rm} = request.body;
        console.log(rm)

        const dados = await db.selectWhereTbAluno(rm);
        console.log(dados);
        response.send(
            JSON.stringify(dados)
        );
    }
);


// ------------------------------------------------------------

router.post(
    "/inserirProfessor",async (request,response)=>{
        const dados = await db.insertTb(request.body);
        console.log(request.body);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.post(
    "/inserirAluno",async (request,response)=>{
        const dados = await db.insertTbAluno(request.body);
        console.log(request.body);
        response.send(
            JSON.stringify(dados)
        )
    }
);

router.post(
    "/cadastrarAluno", (req, res)=>{
        mysql.getConnection((err, conn) =>{
            if(err){return res.status(500).send({error:error})}
            bcrypt.hash(req.body.SENHA_ALUNO, 10, (errBcrypt, hash)=>{
                if(errBcrypt) {return res.status(500).send({error: errBcrypt})}
                conn.query(
                    `insert into tb_usuario_alunos (EMAIL_ALUNO, SENHA_ALUNO, ID_ALUNO_USUARIO) values (?, ?, ?);`,
                    [req.body.EMAIL_ALUNO, hash, req.body.ID_ALUNO_USUARIO],
                    (error, results)=>{
                        conn.release();
                        if(error) {return res.status(500).send({error:error})}
                        response ={
                            mensagem: "USUARIO  CRIADO COM SUCESSO!!",
                            usuarioCriado: {
                                ID_ALUNO_USUARIO: req.body.ID_ALUNO_USUARIO,
                                EMAIL_ALUNO: req.body.EMAIL_ALUNO
                            }
                        }
                        return res.status(201).send(response)
                    }
                )
            })
        })
    }
)

router.post ("/login", (req, res, next)=>{
    const senha = req.body.senha
    mysql.getConnection((err, conn) =>{
        if(err){return res.status(299).send({err:err})}
        conn.query(
            `SELECT * FROM tb_usuario_alunos WHERE ID_ALUNO_USUARIO = ?;`,
            [req.body.ID_ALUNO_USUARIO],
            (error, results)=>{
                conn.release();
                if(error) {return res.status(299).send({error:error})}
                if(results.length < 1){
                    return res.status(299).send({mensagem: "RM NÃO ENCONTRADO"})
                }
                bcrypt.compare(senha, results[0].senha, (err, result)=>{
                    if(err) { 
                        const token = jwt.sign({
                            ID_ALUNO_USUARIO: results[0].ID_ALUNO_USUARIO,
                            EMAIL_ALUNO: results[0].EMAIL_ALUNO
                        }, "SEGREDO", {
                            expiresIn: "1h"
                        }
                        )
                        return res.status(200).send({
                            mensagem: "SENHA OKAY!",
                            token: token
                        })
                        
                    }
                    if(result){
                        return res.status(299).send({mensagem: "FALHA AUTENTICAÇÃO SENHA!"});
                    }
                    return res.status(299).send({mensagem: "FALHA  SENHA!"});
                });

            }
        )
            })
        })



module.exports = router;