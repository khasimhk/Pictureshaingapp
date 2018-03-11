var mongoose = require('mongoose')

var uniqueValidator = require('mongoose-unique-validator');
var users = mongoose.Schema({
    name: String,
    email: String,
    password:String,
    age:Number,
    gender: String,
    Picture:Array
})
// users.plugin(uniqueValidator);
var User = mongoose.model('User', users);

module.exports =  User ;