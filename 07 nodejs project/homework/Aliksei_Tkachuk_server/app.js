var express = require('express')
  , engine = require('ejs-locals')
  , app = express();
var fileReader = require("./fileHandler/fileReader.js");
var path = require("path");
var bodyParser = require('body-parser');
var fileWriter = require('./fileHandler/fileWriter.js');

app.engine('ejs', engine);

app.set('view engine', 'ejs'); // so you can render('index')
app.use(express.static(path.join(__dirname, 'client')));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/',function(req,res,next){
  res.render('index', { text: fileReader("resources\\data.txt") });
});

app.post('/', function (req, res, callback) {
    fileWriter("resources\\data.txt", (req.body.text).toString());
  res.sendStatus(200);
});


app.listen(3000);