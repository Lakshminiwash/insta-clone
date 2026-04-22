const mongoose = require("mongoose")

const postScheema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,"imgUrl is required for creating a post"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"user id is required for creating a post"]
    }
})

const postModel = mongoose.model("posts",postScheema)

module.exports = postModel