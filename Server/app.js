const express = require("express");
const db = require('./Config/db')
const client = require('./Routes/Client/ClientRoutes')
require('dotenv').config()
const bodyparser = require('body-parser')
const app = express();

app.use(bodyparser.json())
db()

//client route conneciton
app.use('/user',client)


app.get('/',(req,res)=>{
    res.status(200).json({mesage:"home page"})
})

app.listen(process.env.port,()=>{
    console.log(`server running on port ${process.env.port}`);
})