var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     
  extended: true
}));

app.get('/', function(req, res){
  res.send('<script type="text/javascript">function DoIT(){var portValue = document.getElementById("port").value; $.post("", {port : portValue})};function closeServer(){var portValue = document.getElementById("port").value;$.get( "/close");}</script><script src="//code.jquery.com/jquery-1.11.3.min.js"></script><label>PORT:</label><p><input id = "port"></input> <button onclick="DoIT()">Create Server!</button><button onclick="closeServer()">Close Server!</button>');
});

app.post('/', function(req, res){
	var _port = req.body.port;
	startServer(_port);
    res.sendStatus(200);
}
);

app.get('/close', function(req,res){
	shutdown();
});

function shutdown (){
  console.log("Received kill signal, shutting down gracefully.");
  app.close;
}


var port = 3000;

startServer(port);



//Lets start our server
function startServer(port){
app.listen(port, function(){
    console.log("Server listening on: http://localhost:%s", port);
});
}