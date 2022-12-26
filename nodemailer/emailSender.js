const nodemailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 개인,
  auth: {
    user: "개인",
    pass: "개인",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "raelulu23@gmail.com",
  to: "raelulu23@gmail.com",
  subject: "테스트 메일입니다. node js공부중 ",
  text: "node js email test입니다.",
};

send(email_data);
