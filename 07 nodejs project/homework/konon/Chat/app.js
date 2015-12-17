var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var log = require('libs/log')(module);
var config = require('config');
var favicon = require('serve-favicon');
var HttpError = require('error');
var errorhandler = require('errorhandler');
var cookieSession = require('cookie-session');
var mongoose = require('mongoose');
var exprSession = require('express-session');
var MongoStore = require('connect-mongo')(exprSession);
var async = require('async');

var app = express();
app.set('port', config.get('port'));
app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser());
app.use(cookieParser());

app.use(exprSession({
  secret : config.get('session:secret'),
  key : config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: new MongoStore({mongoose_connection: mongoose.connection})
}));




app.use(require('middleware/sendHttpError'));
app.use(require('middleware/loadUser'));
app.use(errorhandler());


require('./routes')(app);
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
  if (typeof err == 'number') {
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') == 'development') {
      express.errorHandler()(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});

var server = http.createServer(app);
server.listen(config.get('port'), function(){
  log.info('Express server listening on port :' +config.get('port'));
});

var io = require('socket.io').listen(server);
io.set('origins', 'localhost:*'); //доступ только из домена localhost
io.set('logger', log);

io.sockets.on('connection', function(socket){
  //var username = socket.handshake.user.get('username');
  //socket.broadcast.emit('join', username);

  socket.on('message', function(text, cb){
    socket.broadcast.emit('message', text);
    cb && cb();
  });
});

//io.set('authorization', function(handshake, callback){
//  async.waterfall([
//      function(callback){
//        handshake.cookies = cookie.parse(handshake.headers.cookie || '');
//        var sidCookie = handshake.cookies[config.get('session.key')];
//        var sid = connect.utils.parseSingleCookie(sidCookie, config.get('session:secret'));
//
//        loadSession(sid, callback);
//      },
//      function(session, callback){
//        if(!session){
//          callback(new HttpError(401,'No Session'));
//        }
//        handshake.session = session;
//        LoadUser(session, callback);
//      },
//
//      function(user,callback){
//        if(!user){
//          callback(new HttpError(403,'Annonimus session'))
//        }
//
//        handshake.user=user;
//        callback(null);
//      }
//  ], function(err){
//    if(!err){
//      return callback(null,true);
//    }
//
//    if(err instanceof HttpError)
//    {
//      return callback(null, false);
//    }
//    callback(err);
//  });
//});
//
//function loadSession(sid, callback){
//  store.load(sid, function(err,session){
//    if(arguments.length == 0){
//      return callback(null,null);
//    }
//    else{
//      return callback(null,session);
//    }
//  });
//};
//
//function loadUser(session, callback){
//  if(!session.user){
//    return callback(null,null);
//  }
//
//  User.findById(session.user, function(err,user){
//    if(err) return callback(err);
//
//    if(!user){
//      return callback(null,null);
//    }
//    callback(null,user);
//  });
//};



// view engine setup

//
//// uncomment after placing your favicon in /public
////app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', routes);
//app.use('/users', users);
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});
//

module.exports = app;
