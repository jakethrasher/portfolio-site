const express = require('express');
const app = express();
const cors = require('cors');
const EmailService = require('./service/EmailService');

app.use(cors({
    origin:true,
    credentials:true,
}));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.post('/', async(req, res)=>{
    const {email, subject, message} = req.body
    console.log(req.body)
    try {
        await EmailService.send(email, subject, message);
        res.send('hello')
    } catch (err) {
        console.error(err);
    }
});

module.exports = app; 