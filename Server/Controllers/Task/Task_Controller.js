const TaskModel = require('../../Model/Task/TaskModel');
const userModel = require('../../Model/Client/UserModel')

exports.addTaskOftheUser = async (req, res) => {
    const { task, email } = req.body;

    try {
        const userData = await userModel.find(email);
        if (!userData) {
            return res.status(404).json({ message: "User Not Found" })
        }
        let taskOfTheUser = TaskModel({
            email,
            task,
            date: Date.now(),
            user_id: userData.user_id
        })
        await taskOfTheUser.save();
        res.status(200).json({ message: "Task Stored Suceessfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

exports.getTaskById = async (req, res) => {
    const { user_id } = req.params;
    try {
        const userTask = await TaskModel.find({ user_id })

        if (!userTask) {
            return res.status(404).json({ message: "Task Not Found For This User id" })
        }

        res.status(200).json(userTask)

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}

exports.deleteTaskById = async (req, res) => {
    try {
        const { user_id } = req.params;
        await TaskModel.deleteOne(user_id);
        res.status(200).json({ message: "Task Deleted Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal server Error", error: error.message })
    }
}

exports.updateTaskById = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { task } = req.body;

        const userTask = await TaskModel.findOne({ user_id });
        if (!userTask) {
            return res.status(404).json({ message: "Task Not Found" })
        }

        await TaskModel.updateOne({ user_id }, { task });
        res.status(200).json({ message: "Task Updated Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
}