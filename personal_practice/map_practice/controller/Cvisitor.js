const { User, Visitor } = require("../model");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signupPost = async (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  };
  let result = await Visitor.create(data);
  res.send(true);
};
