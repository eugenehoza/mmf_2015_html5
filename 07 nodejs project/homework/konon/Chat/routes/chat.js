var User = require('models/user').User;

exports.get = function(req, res) {
  res.render('chat',{
    user: req.user
  });
};