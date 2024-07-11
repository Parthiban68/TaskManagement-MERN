const express = require("express");
const db = require('./Config/db')
const client = require('./Routes/Client/ClientRoutes')
require('dotenv').config()
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyparser.json())
db()

//client route conneciton
app.use('/user', client)

//testing purpose
app.get('/', (req, res) => {
    res.status(200).json({ mesage: "home page" })
})


app.listen(process.env.port, () => {
    try {
        console.log(`server running on port ${process.env.port}`);
    } catch (err) {
        console.log(err);
    }
})

