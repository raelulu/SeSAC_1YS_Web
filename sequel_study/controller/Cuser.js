const { User } = require("../model")

exports.main= (req, res) =>{
    res.render('index');
}

exports.signup= (req, res)=>{
    res.render('signup');
}

exports.signupPost= async(req, res)=>{
    let data = {
        id: req.body.id,
        password: req.body.password,
        name: req.body.name
    }
    let result = await User.create(data);
    res.send(true)
}