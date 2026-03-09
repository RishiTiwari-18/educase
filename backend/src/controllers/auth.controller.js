const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")

const getCookieOptions = () => {
    const isProduction = process.env.NODE_ENV === "production"

    return {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000,
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({email})

        if(!user){
            return res.status(404).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if(!comparePassword){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "30d"})

        res.cookie("token", token, getCookieOptions());

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
            id: user._id,
            email: user.email
          }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
} 

const registerController = async (req, res) => {
    try {
        const {email, name, password, number, isagency, company} = req.body

        const isUserAlreadyExist = await userModel.exists({email})

        if(isUserAlreadyExist){
            return res.status(409).json({
                success: false,
                message: "User Already exist"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({email, name, password:hashPassword, isagency, company, number})

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "30d"})

        res.cookie("token", token, getCookieOptions());

        return res.status(201).json({
            success: true,
            message: "User registered",
            data: {
                name: user.name,
                email: user.email,
                isagency: user.isagency,
                company: user.company
            },
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

const getMeController = async (req, res) => {
    try {
        const id = req.user

        const user = await userModel.findById(id).select("-password")

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = { loginController, registerController, getMeController }