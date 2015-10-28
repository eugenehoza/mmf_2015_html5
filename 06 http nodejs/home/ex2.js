var http = require("http");

var server = http.createServer(function(req,resp){
  resp.writeHead(500, {"Content-Type": "text/plain"});
  console.log("Request");
  resp.end("abc");
});

server.listen(8081);

console.log("Server started up on 8081");
