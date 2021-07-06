const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}))

app.get('/email', (req, res)=>{
    console.log(req.body)
    try {
        res.send('hello')
    } catch (err) {
        console.error(err);
    }
});

module.exports = app; 