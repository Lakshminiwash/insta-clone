const express = require("express")
const authRouter = require("../routes/authrouts")
const postRouter = require("../routes/postrouts")
const followUnfollowRouter = require("../routes/followUnfollow.routs")
const likeRouter = require("../routes/likeRoutes")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/followUnfollow",followUnfollowRouter);
app.use("/api/like",likeRouter);


module.exports = app