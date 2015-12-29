function brigde(){

var mysql = require('mysql');
var Sync = require('sync');
var letters = [];
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root'
});

connection.connect();

function getLetters(count){
	letters = [];
	connection.query('select * from letters.letters limit ' + count , function (err, result){
		if (err) throw err; 
	var temp = [];
	var jsonRes = JSON.parse(JSON.stringify(result));
	for ( var i = 0; i < jsonRes.length; i++) {
		temp.push(new Letter(jsonRes[i].id, jsonRes[i].letterText, jsonRes[i].dateReceived, jsonRes[i].dateSend, jsonRes[i].letterTopic, jsonRes[i].incomingAdress, jsonRes[i].outcomingAdress));
	}
	return temp;
});
	return letters;
}

function getFirstLetter(){
	connection.query('select * from letters.letters limit 1' , function (err, result){
		if (err) throw err; 
	var temp = [];
	var jsonRes = JSON.parse(JSON.stringify(result));
	temp.push(new Letter(jsonRes[0].id, jsonRes[0].letterText, jsonRes[0].dateReceived, jsonRes[0].dateSend, jsonRes[0].letterTopic, jsonRes[0].incomingAdress, jsonRes[0].outcomingAdress));
	setLetters(temp);
});
	return letters[0];
}

function getLettersByAddressFrom(from){
	connection.query('select * from letters.letters where incomingAdress = "' + from +'"' , function (err, result){
		if (err) throw err; 
	var temp = [];
	var jsonRes = JSON.parse(JSON.stringify(result));
	for ( var i = 0; i < jsonRes.length; i++) {
		temp.push(new Letter(jsonRes[i].id, jsonRes[i].letterText, jsonRes[i].dateReceived, jsonRes[i].dateSend, jsonRes[i].letterTopic, jsonRes[i].incomingAdress, jsonRes[i].outcomingAdress));
	}
	setLetters(temp);
});
	return letters;
}

function getLettersByAddressTo(to){
	connection.query('select * from letters.letters where outcomingAdress = "' + to +'"' , function (err, result){
		if (err) throw err; 
	var temp = [];
	var jsonRes = JSON.parse(JSON.stringify(result));
	for ( var i = 0; i < jsonRes.length; i++) {
		temp.push(new Letter(jsonRes[i].id, jsonRes[i].letterText, jsonRes[i].dateReceived, jsonRes[i].dateSend, jsonRes[i].letterTopic, jsonRes[i].incomingAdress, jsonRes[i].outcomingAdress));
	}
	setLetters(temp);
});
	return letters;
}

function getLettersByDateReceived(dateReceived){
	connection.query('select * from letters.letters where dateReceived = "' + dateReceived +'"' , function (err, result){
		if (err) throw err; 
	var temp = [];
	var jsonRes = JSON.parse(JSON.stringify(result));
	for ( var i = 0; i < jsonRes.length; i++) {
		temp.push(new Letter(jsonRes[i].id, jsonRes[i].letterText, jsonRes[i].dateReceived, jsonRes[i].dateSend, jsonRes[i].letterTopic, jsonRes[i].incomingAdress, jsonRes[i].outcomingAdress));
	}
	setLetters(temp);
});
	return letters;
}

function getLettersByDateSend(dateSend){
	connection.query('select * from letters.letters where dateSend = "' + dateSend +'"' , function (err, result){
		if (err) throw err; 
	var temp = [];
	var jsonRes = JSON.parse(JSON.stringify(result));
	for ( var i = 0; i < jsonRes.length; i++) {
		temp.push(new Letter(jsonRes[i].id, jsonRes[i].letterText, jsonRes[i].dateReceived, jsonRes[i].dateSend, jsonRes[i].letterTopic, jsonRes[i].incomingAdress, jsonRes[i].outcomingAdress));
	}
	setLetters(temp);
});
	return letters;
}

function getLettersByTopic(letterTopic){
	connection.query('select * from letters.letters where incomingAdress = "' + letterTopic +'"' , function (err, result){
		if (err) throw err; 
	var temp = [];
	var jsonRes = JSON.parse(JSON.stringify(result));
	for ( var i = 0; i < jsonRes.length; i++) {
		temp.push(new Letter(jsonRes[i].id, jsonRes[i].letterText, jsonRes[i].dateReceived, jsonRes[i].dateSend, jsonRes[i].letterTopic, jsonRes[i].incomingAdress, jsonRes[i].outcomingAdress));
	}
	setLetters(temp);
});
	return letters;
}

function getLettersByTextContains(text){
	connection.query('select * from letters.letters where letterText like "%' + text +'%"' , function (err, result){
		if (err) throw err; 
	var temp = [];
	var jsonRes = JSON.parse(JSON.stringify(result));
	for ( var i = 0; i < jsonRes.length; i++) {
		temp.push(new Letter(jsonRes[i].id, jsonRes[i].letterText, jsonRes[i].dateReceived, jsonRes[i].dateSend, jsonRes[i].letterTopic, jsonRes[i].incomingAdress, jsonRes[i].outcomingAdress));
	}
	setLetters(temp);
});
	return letters;
}

function removeLetterByLetterTopic(letterTopic){
	connection.query('delete from letters.letters where letterTopic ="' + letterTopic +'"' , function (err, result){
		if (err) throw err; 
		console.log("Letter with letterTopic =" +letterTopic +"has been removed from database.");
		});
}

function removeLetterByAdressTo(outcomingAdress){
	connection.query('delete from letters.letters where outcomingAdress ="' + outcomingAdress +'"' , function (err, result){
		if (err) throw err; 
		console.log("Letter with outcomingAdress =" +outcomingAdress +"has been removed from database.");
		});
}

function createLetter(id, letterText, dateReceived, dateSend, letterTopic, incomingAdress, outcomingAdress){
	connection.query('insert into letters.letters (id, letterText, dateReceived, dateSend, letterTopic, incomingAdress, outcomingAdress) values ('+id+', "'+letterText+'", '+dateReceived+' , '+dateSend+' , "'+letterTopic+'", "'+incomingAdress+'", "'+outcomingAdress+'");' , function (err, result){
		if (err) throw err; 
		console.log("Letter with has been added to database.");
		});
}

function changeTextInLetter(text, newText){
	connection.query('update letters.letters SET letterText='+newText+' WHERE letterText like "%' + text +'%"' , function (err, result){
		if (err) throw err; 
		console.log("Letter with has been added to database.");
		});
}

function _createLetter(sendTo, desctiption, text){
	connection.query('insert into letters.letters (id, sendTo, desctiption, text) values ('+Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100+', "'+sendTo+'", '+desctiption+' , '+text+'");' , function (err, result){
		if (err) throw err; 
		console.log("Letter has been added to database.");
		});
}

function setLetters(value) {
  letters = [];
  letters = value;
  	
  console.log(letters.length);
}

function Letter(id, letterText, dateReceived, dateSend, letterTopic, incomingAdress, outcomingAdress) {
  this.id = id;
  this.letterText = letterText;
  this.dateReceived = dateReceived;
  this.dateSend = dateSend;
  this.letterTopic = letterTopic;
  this.incomingAdress = incomingAdress;
  this.outcomingAdress = outcomingAdress;
};

connection.end(function(err){
console.log('Connection closed');
});

}
