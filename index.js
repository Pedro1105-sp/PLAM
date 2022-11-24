const express = require("express");
const alunoController = require("./controller/AlunoController");
const cursoController = require("./controller/CursoController");
const turmaController = require("./controller/TurmaController");
const bodyParser = require("body-parser");
const app = express();
//const { rulesToMonitor } = require("nodemon/lib/monitor/match");
const session = require('express-session');
// const searchStudent = require("js/aluno");

const axios = require('axios').default;

app.use('/', alunoController);
app.use('/', cursoController);
app.use('/', turmaController);
//const moment = require('moment');
//const alunoController = require('./controller/AlunoController');

// const professorController = require("./controller/ProfessorController");
// const cursoController = require("./controller/CursoController");


app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.text())

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.get("/", (req, res) =>{
  res.render("login");
});

app.post('/', (req, res)=>{

	const urlAlterarCategoria = 'http://localhost:3000/login';
	
	let login = req.body.login;
	let password = req.body.password;
	
	console.log(login);
	axios.post(urlAlterarCategoria, req.body)
	.then(() =>{
		if ()
	})

});

app.get("/home", (req, res) =>{

	const urlListarCategoria = 'http://localhost:3000/listagemTurma';

	axios.get(urlListarCategoria)
			.then((response)=>{
				
				let turmas = response.data;
				res.render('index',{turmas});
			});
  res.render("index");
});

// app.get("/chamada", (req, res) =>{
//   res.render("chamada");
// });

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

axios.get(urlListarCategoria)
		.then((response)=>{
			
			let alunos = response.data;
			res.render('aluno',{alunos});
		});
});

app.get('/turma', (req, res)=>{

	/** CHAMADA DO AXIOS **/
	const urlListarCategoria = 'http://localhost:3000/listagemTurma';

axios.get(urlListarCategoria)
		.then((response)=>{
			
			let turmas = response.data;
			res.render('index',{turmas});
		});
});


app.get('/chama da', (req, res)=>{

	/** CHAMADA DO AXIOS **/
	const urlListarCategoria = 'http://localhost:3000/listagemAluno';

axios.get(urlListarCategoria)
		.then((response)=>{
			
			let alunos = response.data;
			res.render('chamada',{alunos});
		});
});


app.post('/aluno/:rm', (req, res)=>{

	let {rm} = req.body;
	console.log(rm)
	
	const urlSelecionarAlunoRM = "http://localhost:3000/aluno/" + rm;
	console.log(urlSelecionarAlunoRM)

	axios.post(urlSelecionarAlunoRM)
		.then((response)=>{
			let alunos = response.data;
			console.log(alunos);
			res.render('aluno',{alunos});
		});
});



app.listen(8070, () =>{
  console.log("Servidor está rodando!");
});
