const config = require("config");

async function connect() {
  const mysql = require("mysql2/promise");
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysqlConnection = await mysql.createConnection({
    host: config.get("mysql.host"),
    user: config.get("mysql.usuario"),
    password: config.get("mysql.senha"),
    database: config.get("mysql.banco-de-dados"),
    port: config.get("mysql.port"),
  });
  global.connection = mysqlConnection;
  console.log("BANCO CONECTADO");
  return mysqlConnection;
}

async function selectTb() {
  try {
    const conn = await connect();
    let consulta = `SELECT * FROM bd_tcc.tb_cursos;`;
    const [rows] = await conn.query(consulta);
    return await rows;
  } catch (erro) {
    return erro;
  }
}

async function selectTbAluno() {
  try {
    const conn = await connect();
    let consulta = `SELECT * FROM bd_tcc.tb_alunos order by NM_ALUNO ASC;`;
    const [rows] = await conn.query(consulta);
    return await rows;
  } catch (erro) {
    return erro;
  }
}

async function selectTbDiscilina() {
  try {
    const conn = await connect();
    let consulta = `SELECT * FROM bd_tcc.tb_disciplinas;`;
    const [rows] = await conn.query(consulta);
    return await rows;
  } catch (erro) {
    return erro;
  }
}

async function selectTbTurma() {
  try {
    const conn = await connect();
    let consulta = `SELECT
        CASE
            WHEN ID_TURMA = 1 THEN
                        'Desenvolvimento de sistemas III'
            WHEN ID_TURMA = 2 THEN
                        'Desenvolvimento de sistemas II'
            WHEN ID_TURMA = 3 THEN
                        'Recursos Humanos III'
            END         AS 'TURMA'
        FROM TB_TURMAS;`;
    const [rows] = await conn.query(consulta);
    return await rows;
  } catch (erro) {
    return erro;
  }
}

async function selectWhereTbAluno(rm) {
  try {
    const conn = await connect();
    let query = `SELECT * FROM bd_tcc.tb_alunos where RM =` + rm;
    console.log(rm);
    console.log(query);
    const [rows] = await conn.query(query);
    console.log(rows.length);
    const final = (await rows.length) === 0 ? ["Sem reg"] : rows;
    return await final;
  } catch (erro) {
    return erro;
  }
}

// ------------------------- POST -------------------

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

async function insertTb(dados) {
  try {
    if (isEmpty(dados)) {
      return ["ERRO AO INSERIR, DADOS NULO"];
    } else {
      const conn = await connect();
      const query = `insert into tb_professores (rm_professor, nm_professor, cpf_professor, tel_professor) values (?, ?, ?, ?);`;
      const values = [
        dados.rm_professor,
        dados.nm_professor,
        dados.cpf_professor,
        dados.tel_professor,
      ];
      await conn.query(query, values);
      return ["DADOS INSERIDO NO BANCO DE DADOS"];
    }
  } catch (erro) {
    console.log("NÃO FOI POSSÍVEL INSERIR AO BANCO DE DADOS", erro);
    return erro;
  }
}

async function insertTbAluno(dados) {
  try {
    if (isEmpty(dados)) {
      return ["ERRO AO INSERIR, DADOS NULO"];
    } else {
      const conn = await connect();
      const query = `insert into tb_alunos (rm, nm_aluno, cpf_aluno, tel_aluno, id_turma_aluno) values (?, ?, ?, ?, ?);`;
      const values = [
        dados.rm,
        dados.nm_aluno,
        dados.cpf_aluno,
        dados.tel_aluno,
        dados.id_turma_aluno,
      ];
      await conn.query(query, values);
      return ["DADOS INSERIDO NO BANCO DE DADOS"];
    }
  } catch (erro) {
    console.log("NÃO FOI POSSÍVEL INSERIR AO BANCO DE DADOS", erro);
    return erro;
  }
}

// async function login(dados){
//     try{
//         //const {ID_ALUNO_USUARIO, SENHA_ALUNO} = req.body;
//         if(isEmpty(dados)) {
//             return ['ERRO AO INSERIR, DADOS NULO'];
//         } else{
//             const conn = await connect();
//             const query = `SELECT * FROM tb_usuario_alunos WHERE ID_ALUNO_USUARIO = ?;`;
//             const values = [dados.ID_ALUNO_USUARIO, dados.SENHA_ALUNO];
//             const user = await conn(query).first('*').where({ID_ALUNO_USUARIO: ID_ALUNO_USUARIO})
//         }
//     } catch(e){

//     }
// }

async function login(ID_ALUNO_USUARIO) {
  try {
    const conn = await connect();
    const query =
      `SELECT * FROM tb_usuario_alunos WHERE ID_ALUNO_USUARIO = ?;` +
      ID_ALUNO_USUARIO;
    const [rows] = await conn.query(query);
    return await rows;

    // return ['LOGIN OKAY'];
  } catch (erro) {
    console.log("NÃO FOI REALIZAR O LOGIN AO BANCO DE DADOS", erro);
    return erro;
  }
}

module.exports = {
  selectTb,
  insertTb,
  selectTbDiscilina,
  insertTbAluno,
  selectTbAluno,
  selectWhereTbAluno,
  login,
  selectTbTurma
};
