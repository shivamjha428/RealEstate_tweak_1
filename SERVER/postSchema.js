const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    PropertyType:{
        type:String,
        default:"House"
    },
    Negotiable:{
        type:String,
        default:"Yes"
    },
    Price:String,
    Ownership:{
        type:String,
        default:"sold"  
    },
    PropertyAge:{
        type:String,
        default:"New"  
    },
    PropertyApproved:String,
    PropertyDiscription:String,
    BankLoan:{
        type:String,
        default:"Yes" 
    },
    length1:String,
    Breath:String,
    Area:String,
    AreaUnit:String,
    bhk:String,
    floor:String,
    Furnished:String,
    BankLoan:String,
    car:String,
    Lift:String,
    Electricity:String,
    Facing:String,
    name:String,
    mobile:String,
    poster:String,
    sale:String,
    fp:String,
    Pp:String,
    postImage:String,
    Email:String,
      city:String,
      area:String,
      pincode:String,
      Address:String,
      landmark:String,
      lalitude:String,
      longitude:String,
      bhk:String
})

const  postModal = mongoose.model("post",postSchema)

module.exports = postModal;