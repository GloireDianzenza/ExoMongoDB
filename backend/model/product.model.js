const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{type:String,required:true,unique:true},
    quantity:{type:Number,required:true},
    description:{type:String,required:true}
})

module.exports = mongoose.model("Product",productSchema);