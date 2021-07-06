const SES = require('aws-sdk/clients/ses');

const sendEmail = (email, subject, message) => {
  const params = {
    Destination: { 
    ToAddresses: [
        process.env.SOURCE_EMAIL,
    ]
  },
  Message: { 
    Body: { 
      Html: {
        Charset: "UTF-8",
       Data: `${message} from ${email}`,
      },
    },
    Subject: {
      Charset: 'UTF-8',
      Data: subject,
    }
  },
  Source: process.env.SOURCE_EMAIL,
  ReplyToAddresses: [
    'SEStest@mailinator.com',
  ],
};
  
    const SESConfig = {
    apiVersion: '2010-12-01',
    accessKeyId:process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SES_SECRET_ACCESS_KEY,
    region:process.env.AWS_SES_REGION,
    };

    const response =  new SES(SESConfig).sendEmail(params).promise();
    
    return response;
};
  
module.exports = {
  sendEmail,
};