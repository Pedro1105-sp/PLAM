const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const axios = require('axios').default;
//const moment = require('moment');
//const alunoController = require('./controller/AlunoController');

// const professorController = require("./controller/ProfessorController");
// const cursoController = require("./controller/CursoController");


app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.text())

// app.use("/", alunoController);

// app.use("/", cursoController);

// app.use("/", professorController);

app.get("/login", (req, res) =>{
  res.render("login");
});

app.get("/home", (req, res) =>{
  res.render("index");
});

app.get("/chamada", (req, res) =>{
  res.render("chamada");
});

app.get("/home_secretaria", (req, res) =>{
  res.render("home");
});

// app.get("/aluno", req, res)=>{
//  const urlListarAluno = "http://localhost:3000/listagemAluno";
  
//   // urlListarAluno.findAll({ raw: true, order: [
//   //   ['nm_aluno', 'ASC'] // ASC = crescente
//   // ] });

//   // axios.get("http://localhost:3000/listagemAluno")
//   //   .then(function(alunos){
//   //     console.log('Hi')
//   //     //res.render("aluno", {alunos:alunos });
//   //   });

//   axios.get(urlListarAluno)
//   .then((response)=>{
//     console.log(response.data);
//     let aluno = response.data;
//     res.render('aluno',{aluno});
//   });



app.get('/aluno', (req, res)=>{

	/** CHAMADA DO AXIOS **/
	const urlListarCategoria = 'http://localhost:3000/listagemAluno';

	/** 
	PARAMETROS:
	1 - URL DA ROTA
	2 - CALLBACK DA RESPOSTA DA CHAMADA
	**/
axios.get(urlListarCategoria)
		.then((response)=>{
			// console.log(response.data);
			let alunos = response.data;
			res.render('aluno',{alunos});
		});
});


app.get('/listarAluno/:rm', (req, res)=>{

	let {rm} = req.params;
	
	const urlSelecionarAlunoRM = `http://localhost:3000/aluno/210006${rm}`;

	axios.get(urlSelecionarAlunoRM)
		.then((response)=>{
			let aluno = response.data;
			console.log(aluno);
			res.render('aluno',{aluno});
		});
});











app.listen(8070, () =>{
  console.log("Servidor está rodando!");
});
