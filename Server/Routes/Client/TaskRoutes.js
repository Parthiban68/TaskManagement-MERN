const express = require('express');
const { addTaskOftheUser, updateTaskById, deleteTaskById, getTaskById } = require('../../Controllers/Task/Task_Controller');
const verifyToken = require('../../MiddleWare/jwt_Auth');
const taskRouter = express.Router();

taskRouter.post('/add/task/of/user', verifyToken, addTaskOftheUser)
taskRouter.get('/get/task/by/id/:user_id', verifyToken, getTaskById)
taskRouter.delete('/delete/task/by/id/:user_id', verifyToken, deleteTaskById)
taskRouter.put('/update/task/by/id/:user_id', verifyToken, updateTaskById)


module.exports = taskRouter;