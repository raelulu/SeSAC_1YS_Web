const login = require("../model/login");



exports.login = (req, res) => {
    Visitor.get_login(function(result){
        console.log(result);
        res.render("index", {data: result});
    })
}