var http = require("http");
var fs = require("fs");

function IService() {
	//	argumets: request
	//	return type: bool
	this.isRecipient = function(req) { 
		throw new Error("not implemented");
	}
	//	argumets: request, response
	//	return type: void	
	this.processRequest = function(req, res) {
		throw new Error("not implemented");
	}
};

function FileService(prefix_, directory_) {
	var _prefix = "";
	var _directory = "";
	if (typeof prefix_ !== typeof _prefix ||
		typeof directory_ !== typeof _directory)
	{
		throw new TypeError();
	}
	
	_prefix = prefix_;
	_directory = directory_;
	
	this.isRecipient = function(req) {
		return true;
	}
	this.processRequest = function(req,res) {
		var filePath;
	
		var getFilePathFromUrl = function(url) {
			return url.substr(_prefix.length, url.length - _prefix.length);
		}
		
		//	getting file path from request
		if(req.url=='/index.html' || req.url=='/') {
			filePath = _directory + '/index.html';
		} else {
			filePath = _directory + '/' + getFilePathFromUrl(req.url);
		}
		
		//	got file path. reading file content...
		fs.readFile(filePath, function(err,data) {
			res.end(data);
		});
	}
};

var server = http.createServer(function(req,res){
	console.log("Request");
	
	//	read from config file
	sharedDirectory = "../../project 2/request/страница1/";
	
	var fileService = new FileService("", sharedDirectory);
	fileService.processRequest(req, res);
});

server.listen(8081);
console.log("Server started up on 8081");