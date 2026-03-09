const express = require("express")
const { loginController, registerController, getMeController } = require("../controllers/auth.controller")
const isAuthenticated = require("../middlewares/auth.middleware")
const authRouter = express.Router()

authRouter.post("/login", loginController)
authRouter.post("/register", registerController)
authRouter.get("/get-me", isAuthenticated, getMeController)

module.exports = authRouter