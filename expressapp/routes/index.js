var path = require('path');
var dbPath = path.resolve(__dirname, 'database.db');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbPath);

db.serialize(function() {
	db.run("CREATE TABLE IF NOT EXISTS users (username TEXT, password TEXT)");
	db.run("CREATE TABLE IF NOT EXISTS messages (from_user TEXT, to_user TEXT, message TEXT)");
});

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile(__dirname + "/index.html");
	});


router.get('/account', function(req, res, next) {
	res.render('index', { title: 'Cyph.er - Account Settings' });
});

router.post('/', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	
	db.run("INSERT INTO users VALUES(?)", [username, password], function(err){
		if (err) {
			return console.log(err.message);
		}
		
		console.log('Data inserted');
	});
});

module.exports = router;
