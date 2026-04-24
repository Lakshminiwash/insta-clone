const mongoose = require("mongoose")
// const { post } = require("../routes/followUnfollow.routs")

const likeschema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts",
        required: [ true, "post id is required for creating a like" ]
    },
    user: {
        type: String,
        required: [ true, "username is required for creating a like" ]
    }
},{timestamps:true})

likeschema.index({post:1,user:1},{unique:true})

const likemodal = mongoose.model("likes",likeschema)

module.exports = likemodal