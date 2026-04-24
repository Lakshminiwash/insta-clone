const followModal = require("../models/follow.modal")
const likeModal = require("../models/likeModel")
const userModal = require("../models/userModel")

async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if (followerUsername == followeeUsername) {
        return res.status(400).json({
            message: "you can not follow yourself"
        })
    }

    const isFolloweeExist = await userModal.findOne({
        username: followeeUsername
    })

    if (!isFolloweeExist) {
        return res.status(404).json({
            message: "User you are trying to follow does not exist"
        })
    }

    const isAllreadyFollowing = await followModal.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if (isAllreadyFollowing) {
        return res.status(200).json({
            message: `You are already following ${followeeUsername}`,
            follow: isAllreadyFollowing
        })
    }

     const followRecord = await followModal.create({
        follower: followerUsername,
        followee: followeeUsername
    })

    res.status(201).json({
        message: `You are now following ${followeeUsername}`,
        follow: followRecord
    })
}

async function unfollowUserController(req,res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModal.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })

    if (!isUserFollowing) {
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModal.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}


module.exports = {
    followUserController,
    unfollowUserController
}