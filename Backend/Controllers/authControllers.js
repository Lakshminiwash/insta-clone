const userModel = require("../models/userModel")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


async function registerController(req, res) {
    const { username, email, password, bio, profileImg } = req.body

    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserAlreadyExist) {
        return res.status(409).json({
            message: (isUserAlreadyExist.email == email ? "email already exist" : "username already exist")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio,
        profileImg
    })

    const token = jwt.sign({
        id: user._id,
        username:user.username
    }, process.env.JWT_SECRET,
        { expiresIn: "1h" }
    )

    res.cookie("jwt_token", token)
    res.status(201).json({
        message: "userData generated successfully",
        user,
        token
    })
}


async function loginController(req, res) {
    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    })

    if (!user) {
        return res.status(404).json({
            message: "user not found"
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const isPasswordCorrect = hash == user.password
    if (!isPasswordCorrect) {
        return res.status(401).json({
            message: "password is invalid"
        })
    }
    

    const token = jwt.sign({
        id:user._id,
        username:user.username
    },process.env.JWT_SECRET,{
        expiresIn:"1h"
    })

    res.cookie("jwt_token",token)

    res.status(200).json({
        message: "user logged in",
        user,token
    })
}

module.exports = {
    registerController,
    loginController
}