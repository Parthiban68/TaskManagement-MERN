const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    email: { type: String, require: true },
    task: { type: String, require: true },
    date: { type: String, require: true }
})

const TaskModel = mongoose.model("Tasks", TaskSchema)

exports.module = TaskModel