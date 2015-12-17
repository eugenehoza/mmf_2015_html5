/**
 * Created by Mikalai on 11/18/2015.
 */
var assert = require('assert');
var User = require('models/user').User;

module.exports = function(req, res, next) {
    req.user = res.locals.user=null;

    if (!req.session.user) return next();

    User.findById(req.session.user).exec(function(err, user) {
        if (err) return next(err);
        req.user = user;
        next();
    });

};