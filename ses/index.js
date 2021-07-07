const app = require('./app');

const PORT = process.env.port || 8000; 
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});
