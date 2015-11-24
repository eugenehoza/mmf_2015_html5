/*
var http = require("http");

var server = http.createServer(function(req,resp){
  resp.writeHead(500, {"Content-Type": "text/plain"});
  console.log("Request");
  resp.end("abcdedf");
});

server.listen(8081);

console.log("Server started up on 8081");
*/

var express = require("express");
var HTMLing = require('htmling');
var fs = require('fs');
var __dir = "d:/Studies/2015/07 nodejs project/workingDir";


var app = express();
app.engine('html', HTMLing.express('d:/Studies/2015/07 nodejs project/views/', {watch: true}));
app.set('view engine', 'html');

app.get("/", function(req,res){
  res.send("Hello world <a href='action'>to actions</a>")
});

app.get("/action", function(req, res){
  res.render('actionCool', {
  "title": "Actions List",
  "description": "A list of actions",
  "actions": [
    {
      "name": "a",
      "descr": "action a"
    },
    {
      "name": "b",
      "descr": "action b"
    },
    {
      "name": "c",
      "descr": "action c"
    }
  ]
});
})

app.get("/list", function(req, res){
  var files = fs.readdirSync(__dir);

  var firstStatus = fs.statSync(files[0]);

  console.log(firstStatus);

  var model = {
    "title": "List",
    "description": "A list of smth",
    "actions": files
  };
  console.log(JSON.stringify(model));
  res.render('list', model);
})

app.get("/action/:id", function(req,res){
  res.send("action " + req.params.id)
})

app.get("/file/:name", function(req,res){
  var file = fs.readFileSync(__dir + "/" + req.params.name);
  console.log("file content " + file);
  var model = {
    "title": "File " + req.params.name,
    "description": "File content",
    "file": file
  };
  res.render('file', model);
})

app.get("/css/foundation.css", function(req,res){
  console.log("loading file /css/foundation.css");
  var content = fs.readFileSync('css/foundation.css', 'utf8');
  res.write(content);
  res.end();
})

app.get("/time", function(req,res){
  console.log("return current time");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(new Date().toLocaleTimeString());
})

app.get("/random", function(req,res){
  console.log("return random number");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("random number: "+(Math.random()*10));
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)

})
