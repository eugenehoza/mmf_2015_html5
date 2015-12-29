var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var path = require('path');
var bridge = require('../Konon__DAO/bridge');

app.use(express.static(__dirname + '../../burak_project_HTMLCSS/page2'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     
  extended: true
}));

var port = 3000;

app.get('/sendEmail', function(req, res){
  res.sendFile(path.resolve(__dirname +'../../burak_project_HTMLCSS/page2/page2.html'));
});

app.post('/sendEmail', function(req, res){
	var _to = req.body.to;
	var _descr = req.body.descr;
	var _text = req.body.text;
	bridge._createLetter(_to, _descr, _text);
}
);

app.listen(port, function(){
    console.log("Server listening on: http://localhost:%s", port);
});