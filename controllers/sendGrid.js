const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (emails, html, sender, subject)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            const msg = {
                to: emails,
                from: sender,
                subject: subject,
                text: 'Sent From JustAnotherSender',
                html: html,
              };
            sgMail.sendMultiple(msg)
                .then((resp)=>resolve())
                .catch((err)=>{
                    console.log(err.response.body)
                    reject(err.response.body)
                })
        } catch(err){
            reject()
        }
    })
}

module.exports  = {
    sendEmail,
}