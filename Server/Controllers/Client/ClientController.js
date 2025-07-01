const UserModel = require('../../Model/Client/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { v4: uuid } = require('uuid')
const { generateJwtToken } = require(`../../utils/Global_Functions/generate_Jwt_Token`)

exports.signup = async (req, res) => {

    const { username, email, password } = req.body

    try {

        let user = await UserModel.findOne({ email })

        if (!user) {
            const userId = uuid();
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password, salt)
            user = UserModel({
                user_id: userId,
                username,
                email,
                password: hashpassword
            })

            await user.save()

            res.status(200).json({ message: "User Registered Succesfully", success: true, token })
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

    try {
        if (user) {
            const passwordMatching = await bcrypt.compare(password, user.password);
            if (passwordMatching) {
                const user = {
                    user_id: user.user_id,
                    email: user.email
                }
                const token = generateJwtToken(user)
                res.status(200).json({ message: "Login Successfull", token, user })
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


