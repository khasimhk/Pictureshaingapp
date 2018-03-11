var mongoose = require('mongoose');



var Images = mongoose.Schema({
    picturename: String,
    picturetype: String,
    dateofcreation:Date,
    url: String,
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
// users.plugin(uniqueValidator);
var Image = mongoose.model('Image', Images);

module.exports =  Image ;



