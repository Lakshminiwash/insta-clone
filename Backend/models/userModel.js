const mongoose = require("mongoose")

const userScrema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username is already exist"],
        required : [true,"username is required"]
    },
    email:{
        type:String,
        unique:[true,"email id is already exist"],
        required:[true,"email id is required"]
    },
    password:{
        type:String,
        uniquie:[true,"password is required"]
    },
    bio:String,
    profileImg:{
        type:String,
        default:"https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp"
    }

})
const userModel = mongoose.model("user",userScrema)

module.exports = userModel