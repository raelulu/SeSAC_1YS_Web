const mysql = require("mysql");

const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'rhfosla',
    database: 'practice43'
})





exports.get_login = (cb) => {
    var sql = 'SELECT * FROM login';

  
    cnn.query(sql, (err, rows) => {
        if (err) throw err;
        
        console.log("login:", result);
        cb(rows);
    })
}

