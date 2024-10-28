const express = require('express')
const env = require('dotenv')
env.config()
const app = express()
const application = require('./app')

const port = 8000

app.listen(port, application, ()=>{
    console.log("app is listening at port", `${port}`);
    
})

