var express = require("express");
var config = require("./config.json");
var upload = require("./upload");
var morgan = require('morgan');
var ls = require("ls");

var app = express();

app
    .use(morgan(":method :url :status"))
    .use(allowCORS)
    .listen(config.port, function () {
        console.log("Server starts on port", config.port);
    });

app.get('/files', function (req, res) {
    var filenames = ls(config.storage + "*")
        .map(function (file) {
            return file.file;
        });

    res.send({files: filenames});
});

app.post('/upload', upload.single('file'), function (req, res) {
    /* HTTP - 200 */
    res.send();
});

function allowCORS(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}