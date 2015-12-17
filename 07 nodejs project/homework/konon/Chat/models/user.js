/**
 * Created by Mikalai_Konan on 11/13/2015.
 */
var crypto = require('crypto');
var async = require('async');

var mongoose = require('../libs/mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

schema.methods.encryptPassword = function(password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('password')
    .set(function(password) {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function() { return this._plainPassword; });


schema.methods.checkPassword = function(password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

schema.methods.getPublicFields = function() {
    return {
        username: this.username,
        created: this.created,
        id: this.id
    };
};

schema.statics.authorize = function(username, password, callback){
    var User = this;
    async.waterfall([
            function(callback) {
                User.findOne({ username: req.body.username }).exec(callback);
            },
            function(user, callback) {
                if (!user) {
                    user = new User({
                        username: req.body.username,
                        password: req.body.password
                    });
                    // если просто user.save(callback), то будет лишний аргумент у следующей функции
                    user.save(function(err, user, affected) {
                        callback(err, user);
                    });
                } else {
                    if (user.checkPassword(req.body.password)) {
                        callback(null, user);
                    } else {
                        res.send(new AuthError( 'Логин или пароль неверен.'));
                    }
                }
            }
        ],
        callback
    );
};

exports.User = mongoose.model('User', schema);

var util = require('util');
var http = require('http');

// ошибки для выдачи посетителю
function AuthError(message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, AuthError);

    this.message = message;
};

util.inherits(AuthError, Error);
AuthError.prototype.name = 'AuthError';
module.AuthError = AuthError;