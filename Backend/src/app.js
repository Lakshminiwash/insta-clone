const express = require("express")
const authRouter = require("../routes/authrouts")
const postRouter = require("../routes/postrouts")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);


module.exports = app