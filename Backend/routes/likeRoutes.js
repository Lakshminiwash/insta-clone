const express = require("express")
const likeRouter = express.Router()
const identifyUser = require("../middleWares/auth.middleware")
const likeController = require("../Controllers/likeController")

likeRouter.post("/:postId",identifyUser,likeController.LikeController)

module.exports = likeRouter