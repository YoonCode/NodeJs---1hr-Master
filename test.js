const nodemailer = require('nodemailer')

const email = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'e441d35ba44f5f',
    pass: '234473ea66742e',
  },
}

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error)
    } else {
      console.log(info)
      return info.response
    }
  })
}

let email_data = {
  from: 'yjin830201@gmail.com',
  to: 'yjin830201@gmail.com',
  subject: '테스트 메일',
  text: 'nodejs 한 시간 만에 끝내보자!',
}

send(email_data)
