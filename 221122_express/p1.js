const express = require("express");
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use("/static", express.static("static"));

app.get('/img', (req, res)=>{
    res.render( "p1" ,{
        title: "practice1",
        data: ["/static/img/1.jpg", "/static/img/2.jpg", "/static/img/3.jpg"]
    });
})

app.listen( port, ()=>{
    console.log("server open :", port);
})

