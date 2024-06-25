const UserModel = require('../../Model/Client/UserModel')
const bcrypt = require('bcryptjs')

exports.signup = async (req,res) => {

    const {username, email, password} = req.body

    let user = await UserModel.find({email})

    try {
        if (user) {
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password, salt)
            user = UserModel({
                username,
                email,
                password: hashpassword
            })
            await user.save()
        } else {
            res.status(400).json({ message: "Email already registered" })
        }
    } catch (error) {
        console.log(error);
    }
}