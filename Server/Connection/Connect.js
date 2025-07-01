const express = require('express');
const client = require('../Routes/Client/ClientRoutes')
const task = require('../Routes/Client/TaskRoutes')
const connect = express.Router();

connect.use('/user', client)
connect.use('/task', task)


module.exports = connect
