const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

module.exports = router;

router.get('/', function (req, res) {
	let tweets = tweetBank.list();
	res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
	var name = req.params.name;
	var list = tweetBank.find( {name: name} );
	console.log(list);
	res.render( 'index', {tweets: list} );
});

// Add single tweet route 
// uID changed from string to int for find function line 23 

router.get('/tweets/:uID', function(req, res){
	var uID = parseInt(req.params.uID);
	var list = tweetBank.find({uID: uID});
	console.log(list);
	res.render('index', {tweets: list});
})