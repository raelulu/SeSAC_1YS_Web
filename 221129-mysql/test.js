const mysql = require("mysql");

const cnn = mysql.createConnection({
    host:'localhost', 
    user: 'user',
    password: 'rhfosla',
    database: 'SESAC_TEST'
})

cnn.query('select * from user', (err, result)=>{
    if (err) throw err;
    console.log(result);

})

