const mongoose = require("mongoose");
const ProModel =new mongoose.Schema({
    name:String,
    brand:String,
    price:String,
    defaultImage:String,
    images:[String]
})

module.exports = mongoose.model("Products", ProModel);