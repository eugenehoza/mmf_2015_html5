var http = require("http");
var express = require("express");
var HTMLing = require('htmling');
var fs = require("fs");


var __rootDir = "d:/Studies/2015/07 nodejs project/lecture";

var app = express();

app.engine('html', HTMLing.express(__rootDir + '/views/', {watch: true}));
app.set('view engine', 'html');

app.get("/", function(req,res){
  res.send("Hello world <a href='files'>to files manager</a>")
});

app.get("/files", function(req,res){


  var files = fs.readdirSync(__rootDir);

  var modelTem = [{"name": "abc.js", "type": "folder", "size": 1234}]

  var firstStatus = fs.statSync(files[0]);

  console.log(firstStatus);


  var model = {
    "title": "Files",
    "description" : "Files list",
    "files":files
  };

  var view = "actions"

  res.render(view, model);
});

app.get("/edit/:fileName", function(req,res){
  var view = "edit";

  var file = fs.readFileSync(__rootDir + "/" + req.params.fileName, 'utf8');

  var model = {
    "title": "File",
    "description" : "File content",
    "fileName":req.params.fileName,
    "file":file
  };

  res.render(view, model);
});

app.get("/css/foundation.css", function(req,res){
  var file = fs.readFileSync(__rootDir + "/" + "/css/foundation.css", 'utf8');
  res.write(file);
  res.end();
});

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});
