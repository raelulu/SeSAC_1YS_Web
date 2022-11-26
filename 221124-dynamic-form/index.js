const express = require('express')
const app =express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/",function(req, res){
    res.render("index");
})

app.get("/p1",function(req, res){
    res.render("p1");
})

app.get("/p2",function(req, res){
    res.render("p2");
})





app.post('/postform', function(req,res){
    console.log(req.body);
    console.log(req.body.id1);
    if (req.body.id1== '1' && req.body.pw1== '2'){
        res.send({msg:'<p style="color: blue;">로그인 성공</p>'});
    } else {
        res.send({msg:'<p style="color: red;">로그인 실패</p>'});
    }
})

app.listen(port, ()=>{
    console.log("Server Port :", port);
});

