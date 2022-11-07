const express = require('express');
const router = express.Router();
const db = require('./db');
const mysql = require("./mysql").pool
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { query } = require('express');
//const { query } = require('express');
//const { query, response } = require('express');
router.use(express.json());


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


router.post("/cadastrarAluno", async (req, res)=>{
    try{
        const {EMAIL_ALUNO, SENHA_ALUNO, ID_ALUNO_USUARIO} = req.body;  
        // if (!EMAIL_ALUNO || !SENHA_ALUNO || !ID_ALUNO_USUARIO) {
        //     res.status(400).json(`Missing ${!EMAIL_ALUNO ? "EMAIL_ALUNO" : 'SENHA_ALUNO'}!`)
        // }
        var senha = await bcrypt.hash(SENHA_ALUNO, 10);
        mysql.getConnection((err, conn)=>{
            conn.query(`insert into tb_usuario_alunos (EMAIL_ALUNO, SENHA_ALUNO, ID_ALUNO_USUARIO) values (?, ?, ?);`,
            [EMAIL_ALUNO, senha, ID_ALUNO_USUARIO],
            (error, results) =>{
                conn.release();
                if(results){

               } if(error) {return res.status(500).send({error:error})}
               console.log("ALUNO INSERIDO SUCESSO!!", senha);
                return res.status(200).send({mensagem: "ALUNO INSERIDO SUCESSO!!"})
            }
        )})
    } catch(e){
        console.log(e);
        res.status(500).send("ERROR")

    }
})

router.post("/login", async (req, res)=>{
    try{
        const {SENHA_ALUNO, ID_ALUNO_USUARIO} = req.body;
        mysql.getConnection((err, conn)=>{
        if(err){return res.status(299).send({err:err})}
        conn.query(`SELECT * FROM tb_usuario_alunos WHERE ID_ALUNO_USUARIO = ?;`,
            [ID_ALUNO_USUARIO],
            (error, results) =>{
                conn.release();
                if(results){
                    if(error) {return res.status(299).send({error:error})}
                    if(results.length < 0){
                    return res.status(299).send({mensagem: "RM NÃO ENCONTRADO"})
                }
               } if(error) {return res.status(299).send({error:error})}
               bcrypt.compare(SENHA_ALUNO, SENHA_ALUNO)
               console.log("USUÁRIO LOGADO COM SUCESSO!!", SENHA_ALUNO, ID_ALUNO_USUARIO);
               const token = jwt.sign({
                ID_ALUNO_USUARIO: results[0].ID_ALUNO_USUARIO,
                EMAIL_ALUNO: results[0].EMAIL_ALUNO,
                SENHA_ALUNO: results[0].SENHA_ALUNO
            }, "SEGREDO", {
                expiresIn: "1h"
            }
            )
            return res.status(200).send({
                mensagem: "SENHA OKAY!",
                token: token
            })
            }
        )})
    } catch(e){

    }
})

// router.post("/login", async(req, res)=>{
//     const rm = req.body.ID_ALUNO_USUARIO
//     const senha = req.body.SENHA_ALUNO
//  mysql.getConnection((err, conn)=>{
//     const user =  conn.query(`SELECT * FROM tb_usuario_alunos;`,
//     [rm],
//     (errors, results)=>{

//         if(user === null){
//             return res.status(400).json({
//                 erro: true,
//                 mensagem: "ERRO: USUÁRIO NÃO ENCONTRADO"
//             })
//         } 
    
//         // const obj= JSON.parse(JSON.stringify(user))
//         if(results) {console.log(user)
//         // console.log(obj)
//         return user
//         }
//         // if(bcrypt.compare(senha, user.SENHA_ALUNO)){
//         //     return console.log(user.EMAIL_ALUNO, user.SENHA_ALUNO), res.status(400).json({
//         //         erro: true,
//         //         mensagem: "ERRO: USUÁRIO OU SENHA INCORRETOS"
//         //     })
//         // }
//     }
   
//    )
// })})

// router.post("/login", async(req, res)=>{
//     try{   
//         const {SENHA_ALUNO, ID_ALUNO_USUARIO} = req.body;
//         const user = await connect("tb_usuario_alunos").first('*').where({ID_ALUNO_USUARIO: ID_ALUNO_USUARIO});
//     } catch(e){

//     }
// })

// router.post("/login", async(req, res) =>{
//     const {ID_ALUNO_USUARIO} = req.body;
//     const dados = await db.login(ID_ALUNO_USUARIO);
//     console.log(req.body)
//     if(req.body.ID_ALUNO_USUARIO != dados){
//         return res.status(400).json({
//             erro: true,
//             mensagem: "ERRO: Usuário e senha incorretos!!"
//         });
//     }
//     return res.json({
//         erro: false,
//         mensagem: "LOGIN OKAY"
//     })
   
// })

// router.post("/login", async (req, res)=>{
//     try{
//         const {ID_ALUNO_USUARIO, SENHA_ALUNO} = req.body;
//         mysql.getConnection((err, conn)=>{
//           const login =  conn.query(`SELECT * FROM tb_usuario_alunos WHERE ID_ALUNO_USUARIO = ?;`);
//              [ID_ALUNO_USUARIO, SENHA_ALUNO];
//             if(login) {
//                 const validarSenha = bcrypt.compare(SENHA_ALUNO, login.SENHA_ALUNO);
//                 if(validarSenha){
//                     res.status(200).json("Senha Valida");
//                 } else {
//                     res.json("Senha inválida");
//                 }
//             ;} else {
//                 res.status(404).json("Usuário não encontrado");
//           }
//         })
//     } catch(e){
//         console.log(e);
//         res.status(500).send("Não Há nada")
//     }
// })

// router.post(
//     "/cadastrarAluno", (req, res)=>{
//         mysql.getConnection((err, conn) =>{
//             if(err){return res.status(500).send({error:error})}
//             bcrypt.hash(req.body.SENHA_ALUNO, 10, (errBcrypt, hash)=>{
//                 if(errBcrypt) {return res.status(500).send({error: errBcrypt})}
//                 conn.query(
//                     `insert into tb_usuario_alunos (EMAIL_ALUNO, SENHA_ALUNO, ID_ALUNO_USUARIO) values (?, ?, ?);`,
//                     [req.body.EMAIL_ALUNO, hash, req.body.ID_ALUNO_USUARIO],
//                     (error, results)=>{
//                         conn.release();
//                         if(error) {return res.status(500).send({error:error})}
//                         response ={
//                             mensagem: "USUARIO  CRIADO COM SUCESSO!!",
//                             usuarioCriado: {
//                                 ID_ALUNO_USUARIO: req.body.ID_ALUNO_USUARIO,
//                                 EMAIL_ALUNO: req.body.EMAIL_ALUNO
//                             }
//                         }
//                         return res.status(201).send(response)
//                     }
//                 )
//             })
//         })
//     }
// )

// router.post ("/login", (req, res)=>{
//     const {ID_ALUNO_USUARIO, SENHA_ALUNO} = req.body;
//     mysql.getConnection((err, conn) =>{
//         if(err){return res.status(299).send({err:err})}
//         conn.query(
//             `SELECT * FROM tb_usuario_alunos WHERE ID_ALUNO_USUARIO = ?;`,
//             [ID_ALUNO_USUARIO],
//             (error, results)=>{
//                 conn.release();
                // if(error) {return res.status(299).send({error:error})}
                // if(results.length < 0){
                //     return res.status(299).send({mensagem: "RM NÃO ENCONTRADO"})
                // }
//                 bcrypt.compare(SENHA_ALUNO, query.hash, (err, result)=>{
//                     if(err) { 
                        // const token = jwt.sign({
                        //     ID_ALUNO_USUARIO: results[0].ID_ALUNO_USUARIO,
                        //     EMAIL_ALUNO: results[0].EMAIL_ALUNO
                        // }, "SEGREDO", {
                        //     expiresIn: "1h"
                        // }
                        // )
                        // return res.status(200).send({
                        //     mensagem: "SENHA OKAY!",
                        //     token: token
                        // })
                        
//                     }
//                     if(result){
//                         return res.status(299).send({mensagem: "FALHA AUTENTICAÇÃO SENHA!"});
//                     }
//                     return res.status(299).send({mensagem: "FALHA  SENHA!"});
//                 });

//             }
//         )
//             })
//         })



module.exports = router;