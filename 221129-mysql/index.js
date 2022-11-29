const express = require('express');
const app = express();
const port = 8000;


const mysql = require("mysql");

const cnn = mysql.createConnection({
    host:'localhost', 
    user: 'user',
    password: 'rhfosla',
    database: 'SESAC_TEST'
})



app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    cnn.query('select * from user', (err, result)=>{
        if (err) throw err;
    
        console.log(result);
        res.render('index', { rows: result});
    })
});

app.listen(port, () => {
    console.log('server open : ', port);
});
