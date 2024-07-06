const express = require('express')
const route = express.Router()
const { signup, login } = require('../../Controllers/Client/ClientController')

route.post("/signup", signup)
route.post('/login', login)

route.get('/', (req, res) => {
    try {
        res.status(200).json({ message: "user page" })
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})

module.exports = route