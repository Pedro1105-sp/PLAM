const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const db = require('./db');
const dbIndex = require('./db/index.js');


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

module.exports = router;