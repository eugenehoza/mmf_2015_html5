
var fs = require("fs");

var fileReader = function(path){
    {
        return fs.readFileSync(path,"utf-8");
    }
}

module.exports = fileReader;