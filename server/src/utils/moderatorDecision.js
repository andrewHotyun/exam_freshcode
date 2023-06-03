const nodemailer = require('nodemailer'); 

module.exports.sendMailFromModerator = async (data) => { 
  const {description, email, title} = data; 
  const moderatorEmail = 'kapitansoup200047@gmail.com'; 

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: moderatorEmail,
        pass: '123456789'
      }
    }); 

    const mailOptions = {
      from: moderatorEmail,
      to: email,
      subject: description === 'pending' ? 'Offer accepted by the moderator' : 'Offer bloked by the moderator',
      text: `Your offer of the Project ${title} has been ${description === 'pending' ? 'accepted' : 'blocked'} by the moderator`,
    }; 
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  }; 