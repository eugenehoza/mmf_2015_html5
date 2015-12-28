var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root'
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

connection.query('DROP DATABASE IF EXISTS letters;',  function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });
connection.query('CREATE DATABASE letters;',  function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });
connection.query('DROP TABLE IF EXISTS  `letters`.`letters`;',  function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });
connection.query('CREATE TABLE `letters`.`letters` (`id` INT NOT NULL,`letterText` VARCHAR(45) NULL,`dateReceived` DATETIME NULL,`dateSend` DATETIME NULL,`letterTopic` VARCHAR(45) NULL,`incomingAdress` VARCHAR(45) NULL,`outcomingAdress` VARCHAR(45) NULL,PRIMARY KEY (`id`),UNIQUE INDEX `id_UNIQUE` (`id` ASC));', function(err, data)
  {
    if (err) throw err; 
    console.log(data);
  });


connection.end(function(err){
  console.log('Connection closed');
});