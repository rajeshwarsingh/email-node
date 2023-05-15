const sendgrid = require('@sendgrid/mail');

    const SENDGRID_API_KEY = "<SENDGRID_API_KEY>"

    sendgrid.setApiKey(SENDGRID_API_KEY)

    const msg = {
       to: 'test@example.com',
     // Change to your recipient
       from: 'test@example.com',
     // Change to your verified sender
       subject: 'Sending with SendGrid Is Fun',
       text: 'and easy to do anywhere, even with Node.js',
       html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sendgrid
       .send(msg)
       .then((resp) => {
         console.log('Email sent\n', resp)
       })
       .catch((error) => {
         console.error(error)
     })