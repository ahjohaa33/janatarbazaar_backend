const express = require('express')
const app = express()
require('dotenv').config()
const Port = process.env.PORT || 3000
const path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.send("hello! express is live")
});

app.listen(Port, ()=>{
    console.log(`Server listening on port: ${Port}`)
});