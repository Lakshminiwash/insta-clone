const express = require("express")
const authRouter = express.Router();
const authController = require("../Controllers/authControllers")

// /api/auth/register
authRouter.post("/register",authController.registerController )

// /api/auth/login
authRouter.post("/login",authController.loginController)

module.exports = authRouter;