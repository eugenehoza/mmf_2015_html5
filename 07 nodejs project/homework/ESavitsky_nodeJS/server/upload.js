var multer = require("multer");             // module for working with for-data
var congig = require("./config.json");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, congig.storage);
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

module.exports = multer({storage: storage});
