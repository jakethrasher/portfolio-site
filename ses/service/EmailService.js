const { sendEmail } = require('../utils/ses');

module.exports = class EmailService{
    static async send(email, subject, message){
        await sendEmail(email, subject, message);
    }    
}