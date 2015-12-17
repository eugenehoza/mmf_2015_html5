var mongoose = require('./libs/mongoose');
mongoose.set('debug', true);
var async = require('async');

async.series([
    open,
    dropDatabase,
    requreModels,
    createUsers,
    close
],function(err, results){
    console.log(arguments);
    mongoose.disconnect();
    process.exit(err ? 255 : 0);
});

function open(callback){
    mongoose.connection.on('open', callback);
}

function dropDatabase(callback){
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function requreModels(callback){
    require('./models/user');

    async.each(Object.keys(mongoose.models), function(modelName, callback)
    {
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
}

function createUsers(callback){
    require('./models/user');
    var users = [
        {username:'User1', password: 'Password1'},
        {username:'User2', password: 'Password1'},
        {username:'User3', password: 'Password1'}
    ];

    async.each(users, function (userData, callback) {
        var user = new mongoose.models.User(userData);
        user.save(callback);
    }, callback);
};

function close(callback){
    mongoose.disconnect(callback);
};