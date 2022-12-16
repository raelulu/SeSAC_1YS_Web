const mysql = require("mysql");
const sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
); 

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// const cnn = mysql.createConnection({
//     host: 'localhost',
//     user: 'user',
//     password: 'rhfosla',
//     database: 'zero_wave'
// })


// exports.get_login = (cb) => {
//     var sql = 'SELECT * FROM login';

//     cnn.query(sql, (err, result) => {
//         if (err) throw err;
        
//         console.log("login:", result);
//         cb(result);
//     })
// }

// exports.insert = (req_body, cb) => {
//     let sql = `INSERT INTO member VALUES('${req_body.id}',
//     '${req_body.pwd}','${req_body.name}');`

//     cnn.query(sql, (err, result)=>{
//         if(err) throw err;
//         console.log("insert result : ", result);
//         cb();
//     })
// }

// exports.select = (data, cb) => {
//     let sql = `SELECT * FROM member WHERE id='${data.id}' limit 1;`
//     cnn.query(sql, (err, result)=> {
//         if(err) throw err;
//         console.log("select result : ", result);
//         cb(result);
//     })
// }

// exports.selectOne = (id, cb) => {
//     let sql = `SELECT * FROM member WHERE id='${id}';`
//     cnn.query(sql, (err, result)=> {
//         if(err) throw err;
//         console.log("select result one : ", result);
//         cb(result[0]);
//     })
// }

module.exports =db;
