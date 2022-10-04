const express = require("express");
const bodyParser = require("body-parser");
const moment = require('moment');
const alunoController = require('./controller/AlunoController');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.text())

app.use("/", alunoController);

app.get("/login", (req, res) =>{
  res.render("login");
});

app.get("/home", (req, res) =>{
  res.render("index");
});

app.get("/aluno", (req, res) =>{
  res.render("aluno");
});
app.get("/professor", (req, res) =>{
  res.render("professor");
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
