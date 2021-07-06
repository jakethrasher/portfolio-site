const express = require('express');
const app = express();
const cors = require('cors');
const EmailService = require('./service/EmailService');

app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.post('/email', async(req, res)=>{
    const {email, subject, message} = req.body
    try {
        await EmailService.send(email, subject, message);
        res.send('hello')
    } catch (err) {
        console.error(err);
    }
});

module.exports = app; 