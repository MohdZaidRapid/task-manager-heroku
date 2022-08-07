const nodemailer = require("nodemailer");

require("dotenv").config();
let transport = nodemailer.createTransport({
  host: process.env.API_EMAIL_HOST,
  port: process.env.API_PORT,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

const sendWelcomeEmail = (email, name) => {
  const mailOptions = {
    from: "pirir19465@aregods.com",
    to: email,
    subject: "Sending testing mail",
    text: `Welcome to the app ${name} ,name .Let me know how you get along with the app`,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      return error;
    } else {
      return `emai sent ${info.accepted}`;
    }
  });
};

const sendCancelationEmail = (email, name) => {
  const mailOptions = {
    from: "pirir19465@aregods.com",
    to: email,
    subject: "Sorry to see you go!",
    text: `Goodbye ,${name} . I  hope see you back sometime soon. `,
  };
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent" + info.messageId);
    }
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
