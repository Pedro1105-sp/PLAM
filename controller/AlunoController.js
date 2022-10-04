const express = require('express');
const router = express.Router();
const modelAluno = require('../model/AlunoModel');


router.get('/chamada', (req, res) =>{
  modelAluno.findAll({ raw: true, order: [
    ['nm_aluno', 'ASC'] // ASC = crescente
  ] }).then(function(alunos){
    res.render("chamada", {alunos:alunos });
  });

});

router.post('/inserirAluno', (req, res)=>{

  let {rm, nm_aluno} = req.body;
  console.log(req.body);

  modelAluno.create(
      {
      rm,
      nm_aluno
      }
  ).then(
      ()=>{
              return res.status(201).json({
                  erroStatus: false,
                  menssagemStatus: 'Anotação inserida com sucesso!'
          });
      }
  ).catch(
      (erro)=>{
                  return res.status(400).json({
                      erroStatus: true,
                      erroMessagem: 'Houve um erro ao inserir a anotação',
                      erroBancoDados: erro
                  });
      }
  );

});

module.exports = router;