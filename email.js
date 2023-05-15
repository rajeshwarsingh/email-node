const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9b182caf751ef7",
    pass: "1262165e7a0fa0"
  }
});

message = {
  from: "rajan23024@gmail.com",
  to: "freshmorning1462@gmail.com",
  subject: "Subject",
  text: "Hello SMTP Email"
};

transporter.sendMail(message, (err, info)=> {
  if(err) {
    console.log(err)
  } else {
    console.log(info);
  }
});