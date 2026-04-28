const express = require("express")
const likeRouter = express.Router()
const identifyUser = require("../middleWares/auth.middleware")
const likeController = require("../Controllers/likeController")

// api/like/postId 
likeRouter.post("/like/:postId",identifyUser,likeController.LikeController)

// api/unLike/postId 
likeRouter.post("/unLike/:postId",identifyUser,likeController.UnlikeController)



module.exports = likeRouter