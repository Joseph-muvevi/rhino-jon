const nodemailer = require("nodemailer")

// creating a transport
const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: 587,
            service: process.env.SERVICE,
            secure: true,
            auth: {
                user: process.env.USER,
                password: process.env.PASS
            }
        })

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            text: text
        })

        console.log("Email sent successfully")
    }
    catch(error){
        console.log(error)
    }
}

module.exports = sendEmail;