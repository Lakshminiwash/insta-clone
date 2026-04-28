const likemodal = require("../models/likeModel")
const likeModal = require("../models/likeModel")
const postModal = require("../models/postModal")

async function LikeController(req, res) {

    const username = req.user.username
    const postId = req.params.postId

    const post = await postModal.findById(postId)

    if (!post) {
        return res.status(404).json({
            message: "Post not found."
        })
    }

    const like = await likeModal.create({
        post: postId,
        user: username
    })

    res.status(200).json({
        message: "Post liked successfully.",
        like
    })

}

async function UnlikeController(req, res) {
    const username = req.user.username
    const postId = req.params.postId

    const isLiked = await likemodal.findOne({
        post: postId,
        user: username
    })

    if (!isLiked) {
        return res.status(400).json({
            message: "Post didn't like"
        })
    }

    await likemodal.findOneAndDelete({ _id: isLiked._id })

    return res.status(200).json({
        message: "post un liked successfully."
    })

}

module.exports = {
    LikeController,
    UnlikeController
}