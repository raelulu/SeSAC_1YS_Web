const Test = require("../model/Test");

exports.main = (req,res) => {
    let hi = Test.hello();
    res.send(hi)
  //  res.render("index");
}

exports.test = (req,res) => {
    res.send("test");
}

exports.post = (req,res) => {
    res.send("post");
}

