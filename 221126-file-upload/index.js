const express = require('express');
const multer = require('multer');
const path =require('path');
const app =express();
const port = 8080;

app.set("view engine", "ejs");
app.use( "/uploads", express.static( "uploads" ) );
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//const upload =multer({
//   dest: "uploads/"
//})
const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null, 'uploads/');
        },
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            done(null, req.body.id + ext );
        }
     })
    });


app.get("/form2", (req,res) => {
    res.render("file");
});
app.post("/form2", upload.single("userfile"), (req,res) => {
    res.send({ path: req.file.path } );
});


app.listen(port, ()=>{
    console.log("Server Port :", port);
});