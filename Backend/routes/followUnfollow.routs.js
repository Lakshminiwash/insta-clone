const express = require("express")
const followUnfollowRouter = express.Router()
const identifyUser = require("../middleWares/auth.middleware")
const followUnfollowController = require("../Controllers/followUnfollowControllers")

followUnfollowRouter.post("/follow/:username",identifyUser,followUnfollowController.followUserController)
followUnfollowRouter.post("/unfollow/:username",identifyUser,followUnfollowController.unfollowUserController)

module.exports = followUnfollowRouter
