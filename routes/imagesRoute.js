var express = require('express');
var router = express.Router();
var Image = require('../models/imagesModel')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/addimage', (req, res) => {
    var image = new Image({
        picturename: req.body.picturename,
        picturetype: req.body.picturetype,
        dateofcreation: req.body.dateofcreation,
        url: req.body.url,
        uploadedBy: req.body.uploadedBy
    });
    image.save().then((data) => {
        res.send({ data })
    }).catch((error) => {
        res.send({ error });
    });
});

router.get('/getimage/:id', function (req, res) {
    Image.find({ _id: req.params.id })
        .then(function (data) {
            res.status(200).send({ data });
        });
});

router.delete('/deleteimage/:id', function (req, res) {

    Image.remove({ _id: req.params.id })
        .then(function (data) {

            res.status(200).json({ message: "successfully deleted" });
        });
});

router.put('/updateimage/:id', function (req, res) {
    Image.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
        .then(function (data) {
          
            res.status(200).send({ data });
        });
});



module.exports = router;
