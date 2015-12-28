var fs = require("fs");

var fileWriter = function(path,text,callback){
    {
        fs.writeFile(path,text,"utf-8", null);
        return;
    }
}

module.exports = fileWriter;