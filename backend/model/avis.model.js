const mongoose = require("mongoose");

const avisSchema = mongoose.Schema({
    description:{type:String,required:true}
})

module.exports = mongoose.model("Avis",avisSchema);