const config =  require('config');

async function connect() {
    const mysql = require('mysql2/promise');
    if (global.connection &&
        global.connection.state !== 'disconnected')
        return global.connection;

    const mysqlConnection = await mysql.createConnection(
        {
            host: config.get('mysql.host'),
            user: config.get('mysql.usuario'),
            password: config.get('mysql.senha'),
            database: config.get('mysql.banco-de-dados'),
            port: config.get('mysql.port')
        }
    );
    global.connection = mysqlConnection;
    console.log('BANCO CONECTADO');
    return mysqlConnection;
};

async function selectTb() {
    try {
        const conn = await connect();
        let consulta = `SELECT * FROM bd_tcc.tb_cursos;`;
        const [rows] = await conn.query(consulta);
        return await rows;
    } catch (erro) {
        return erro;
    }
};


function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }
    return true;
}

async function insertTb(dados){
    try {
        if(isEmpty(dados)) {
            return ['ERRO AO INSERIR, DADOS NULO'];
        }
        else {
            const conn = await connect();
            const query = `insert into tb_professores (rm_professor, nm_professor, cpf_professor, tel_professor) values (?, ?, ?, ?)`;
            const values = [dados.rm_professor, dados.nm_professor, dados.cpf_professor, dados.tel_professor];
            await conn.query(query, values);
            return ['DADOS INSERIDO NO BANCO DE DADOS'];
        }
    } catch (erro) {
        console.log("NÃO FOI POSSÍVEL INSERIR AO BANCO DE DADOS", erro)
        return erro;
    }
}

module.exports = {selectTb, insertTb};