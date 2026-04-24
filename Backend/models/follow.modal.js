const mongoose = require("mongoose")

const followScheema = new mongoose.Schema({
      follower:{
        type:String
      },
      followee:{
        type:String
      }
},{timestamps:true})

followScheema.index({ follower: 1, followee: 1 }, { unique: true })

const followModal = mongoose.model("follows",followScheema)

module.exports = followModal