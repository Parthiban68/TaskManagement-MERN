const express = require("express");
const db = require('./Config/db')
const mainRouter = require('./Connection/Connect')
require('dotenv').config({ path: './.env.development' })
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyparser.json())
db()

//main route conneciton
app.use('/api', mainRouter)

app.listen(process.env.port, () => {
    try {
        console.log(`server running on port ${process.env.port}`);
    } catch (err) {
        console.log(err);
    }
})

