const UserModel = require('../../Model/Client/UserModel')
const bcrypt = require('bcryptjs')

exports.signup = async (req, res) => {

    const { username, email, password } = req.body

    let user = await UserModel.findOne({ email })

    try {
        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash("password", salt)
            user = UserModel({
                username,
                email,
                password: hashpassword
            })
            await user.save()
            res.status(200).json({ message: "User Registered Succesfully", success: true })
        }
        else {
            res.status(400).json({ message: "Email already registered", success: false })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    let user = await UserModel.findOne({ email })
    console.log(user);
    try {
        if (user) {
            const passwordMatching = await bcrypt.compare("password", user.password)

            if (passwordMatching) {
                res.status(200).json({ message: "Login Successfull", user})
            } 
            else {
               return res.status(400).json({ message: "Invalid Password" })
            }
        }
        else {
           return res.status(400).json({ message: "User Not Found", success: false })
        }
    } catch (error) {
        console.log(error);
    }
}