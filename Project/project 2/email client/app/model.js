//	

var mysql = require('mysql');
var dbconfig = require('./../config/database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

module.exports = function(model) {
	
	var getLettersByUserId = function(userId) {
		connection.query("SELECT FROM letters WHERE author_id = ? ",[userId], function(err, rows){
            done(err, rows[0]);
        });
	}	
	var getLettersByUser = function(user) {
		return getLettersByUserId.call(this, user.Id);
	}

	
	model.getLetters = function(user) {
		if (typeof user === typeof 123) {
			getLettersByUserId.call(user);
		}
		else if (typeof user === typeof {}) {
			getLettersByUser.call(user);
		}
	}
};
