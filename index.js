require('dotenv').config();
const express = require('express');
const app = express()
const Port = process.env.PORT || 3000;
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/openai',require('./routes/openaiRoutes'));
app.use(express.static(path.join(__dirname , 'public')))
app.listen(Port , ()=>{
    console.log("server started successully")
})