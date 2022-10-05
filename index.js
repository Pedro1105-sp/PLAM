const express = require("express");
const bodyParser = require("body-parser");
const moment = require('moment');
const alunoController = require('./controller/AlunoController');
const app = express();
const professorController = require("./controller/ProfessorController");
const cursoController = require("./controller/CursoController");


app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.text())

app.use("/", alunoController);

app.use("/", cursoController);

app.use("/", professorController);

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

app.listen(8070, () =>{
  console.log("Servidor está rodando!");
});
