var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/sharingpicture");
console.log("connected to mongo db");




module.exports={mongoose};