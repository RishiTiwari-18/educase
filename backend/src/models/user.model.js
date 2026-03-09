const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        unique: [true, "Email already exist" ],
        required: [true, "Email is required"]
    },
    number: {
        type: String,
        required: [true, "Phone Number is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    company: String,
    isagency: Boolean
},{
    timestamps:true
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel