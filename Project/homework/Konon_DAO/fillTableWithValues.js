var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database: 'letters'
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


connection.query('insert into letters.letters (id, letterText, dateReceived, dateSend, letterTopic, incomingAdress, outcomingAdress) values (1, "text1", 20111218131717 , 20111218131717 , "TOPIC", "adressFrom1", "adressTo1");',
  function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });
connection.query('insert into letters.letters (id, letterText, dateReceived, dateSend, letterTopic, incomingAdress, outcomingAdress) values (2, "text2", 20121218131717 , 20121218131717 , "TOPIC", "adressFrom2", "adressTo2");',
 function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });
connection.query('insert into letters.letters (id, letterText, dateReceived, dateSend, letterTopic, incomingAdress, outcomingAdress) values (3, "text3", 20131218131717 , 20131218131717 , "TOPIC", "adressFrom3", "adressTo3");',
  function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });
connection.query('insert into letters.letters (id, letterText, dateReceived, dateSend, letterTopic, incomingAdress, outcomingAdress) values (4, "text4", 20141218131717 , 20141218131717 , "TOPIC", "adressFrom4", "adressTo4");',
  function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });
connection.query('insert into letters.letters (id, letterText, dateReceived, dateSend, letterTopic, incomingAdress, outcomingAdress) values (5, "text5", 20151218131717 , 20151218131717 , "TOPIC", "adressFrom5", "adressTo5");',
  function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });
connection.query('insert into letters.letters (id, letterText, dateReceived, dateSend, letterTopic, incomingAdress, outcomingAdress) values (6, "text6", 20161218131717 , 20161218131717 , "TOPIC", "adressFrom6", "adressTo6");',
  function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });

connection.end(function(err){
  console.log('Connection closed');
});