const express = require("express")
const authRouter = express.Router();
const authController = require("../Controllers/authControllers")
const identifyUser = require("../middleWares/auth.middleware")

// /api/auth/register
authRouter.post("/register",authController.registerController )

// /api/auth/login
authRouter.post("/login",authController.loginController)

// /api/auth/getme
authRouter.get("/getme",identifyUser,authController.getmeController)

module.exports = authRouter;