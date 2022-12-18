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
        pw: req.body.pw,
        name: req.body.name
    }
    let result = await User.create(data);
    res.send(true);
}

exports.login= (req, res)=>{
    res.render('login')
}

exports.loginChk = (req, res) =>{
    User.findOne({
        where: {id: req.body.id, pw: req.body.pw},
    }).then((result)=>{
        if(result){
            res.send(true);
            console.log(result.id);
        }
        else {
            res.send(false);
        }
    })
}

exports.mypage= (req, res)=>{
    res.render('mypage')
}


exports.delete =async (req, res) => {
    await User.destroy({
        where : {id : req.body.id}
    })
    res.send(true);
}