const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hello 2")
    console.log("serer is running on port 5000");
})

const charactersRouter = require('./routes/characters')
app.use('/characters', charactersRouter)
const bloodTypeRouter = require('./routes/blood-type')
app.use('/characters/blood-type', bloodTypeRouter)


app.listen(5000)