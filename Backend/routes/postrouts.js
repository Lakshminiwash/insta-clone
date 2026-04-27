const express = require("express")
const postRouter = express.Router()
const postController = require("../Controllers/postController")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middleWares/auth.middleware")
// /api/post
postRouter.post("/",upload.single("file"),identifyUser,postController.creatPostController)
postRouter.get("/",identifyUser,postController.getPostController)
postRouter.get("/getdetails/:postId",identifyUser,postController.getPostController)
postRouter.get("/feed",identifyUser,postController.getFeedController)


module.exports = postRouter