const main = require('../model/index');

exports.main = (req,res)=>{
    res.render("main");
}

exports.login = (req, res) => {
    res.render('login');
}

exports.login_main = (req, res) => {
    
}const main = require('../model/index');

exports.main = (req, res) => {
  res.render('main');
};

/*
exports.map = (req, res) => {
  res.render('map');
};

exports.login = (req, res) => {
  res.render('login');
};

exports.join = (req, res) => {
  res.render('join');
};

exports.mypage = (req, res) => {
  res.render('mypage');
};
*/


exports.mainC = (req, res) => {
  // req.params.type
  res.render(req.params.type, { type: req.params.type });
};


// 로그인(signin)페이지 이동
exports.login = (req,res) => {
  res.render("login");
}

// 로그인 확인 여부
exports.loginChk = (req, res) => {
  main.select(req.body, (result)=> {
      if(result.length > 0) {
          res.send(true);
      }else {
          res.send(false);
      }
  })
}

// 회원 가입 폼 보여주기
exports.user = (req, res) => {
  res.render("signup");
}


// 회원 등록
exports.join = (req, res) => {
  main.insert(req.body, ()=>{
      res.send(true);
  })
}

//로그인 성공 후 메인페이지렌더
exports.main = (req, res) => {
  console.log(req.body);
  main.selectOne(req.body.id, (result)=>{
      res.render("main", { data : result });
  })
}
