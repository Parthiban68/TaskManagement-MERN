const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    activationcode:{
        type: String,
        required:true,
        default:null
    },
    isactivated:{
        type: Boolean,
        required:true,
        default: false
    }
})

const UserModel = mongoose.model('users', UserSchema)


module.exports=UserModel