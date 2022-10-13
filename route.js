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

router.post(
    "/inserirProfessor",async (request,response)=>{
        const dados = await db.insertTb(request.body);
        console.log(request.body);
        response.send(
            JSON.stringify(dados)
        )
    }
);

module.exports = router;