module.exports = function(model) {
	
	var getLettersByUserId = function(userId) {
		return [
			{
				sender : "Sender À",
				reciever : "Reciever Á",
				h2: "h2",
				date: "2015.12.31",
				ps_to_file : "Hi!"
			},
			{
				sender : "Sender Á",
				reciever : "Reciever À",
				h2: "h2",
				date: "2015.12.31",
				ps_to_file : "Good day!"
			}		
		];
	};
	var getLettersByUser = function(user) {
		//return getLettersByUserId.call(this, user.Id);
		return [
			{
				sender : "Sender À",
				reciever : "Reciever Á",
				h2: "h2",
				date: "2015.12.31",
				ps_to_file : "Hi!"
			},
			{
				sender : "Sender Á",
				reciever : "Reciever À",
				h2: "h2",
				date: "2015.12.31",
				ps_to_file : "Good day!"
			}		
		];		
	}
	
	model.getLetters = function(user) {
		if (typeof user === typeof 123) {
			return getLettersByUserId.call(user);
		}
		else if (typeof user === typeof {}) {
			return getLettersByUser.call(user);
		}
	}
};
