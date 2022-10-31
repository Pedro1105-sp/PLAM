const mysql = require("mysql");
const config =  require('config');

var  pool = mysql.createPool({
    host: config.get('mysql.host'),
    user: config.get('mysql.usuario'),
    password: config.get('mysql.senha'),
    database: config.get('mysql.banco-de-dados'),
    port: config.get('mysql.port')
})


exports.pool = pool;