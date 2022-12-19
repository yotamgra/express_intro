const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hello 2")
    console.log("serer is running on port 5000");
})

const charactersRouter = require('./routes/characters')
app.use('/characters', charactersRouter)



app.listen(5000)