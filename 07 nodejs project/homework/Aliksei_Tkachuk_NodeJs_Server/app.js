var express = require('express')
  , engine = require('ejs-locals')
  , app = express();
var fileReader = require("./fileReader.js");
var path = require("path");
var bodyParser = require('body-parser');
var fileWriter = require('fileWriter');

app.engine('ejs', engine);

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs'); // so you can render('index')
app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.get('/',function(req,res,next){
  res.render('index', { text: fileReader("E:\\debug.txt") });
});

app.post('/', function (req, res, callback) {
    fileWriter("E:\\debug.txt", (req.body.text).toString());
  res.sendStatus(200);
});


app.listen(3000);