const express = require('express');
const router = express.Router();
const db = require('./db');

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