const { User } = require('../model/User');

exports.main = (req, res) => {
  res.render('main');
};

//회원등록화면.
exports.join = (req, res) => {
  res.render('join');
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



// 회원 등록
// exports.join = async( req,res ) => {
//   let data = {
//     id: req.body.id,
//     password: req.body.pw,
//     name: req.body.name
//   };
//   let result = await User.create(data);
//     console.log(result.id);
//     res.send(result.id);
// };

