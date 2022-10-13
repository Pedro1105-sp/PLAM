const express = require('express');
const config = require('config');
const http = require('http');
const cors = require("cors");
const reload = require('reload');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(require('./route'));


const server = http.createServer(app);
server.listen(
    config.get("api.porta"),
    ()=>{
        console.log(
            config.get("api.msg") + ' - ' +
            config.get("api.caminho") + ':' +
            config.get("api.porta")
        )
    }
);

reload(app);