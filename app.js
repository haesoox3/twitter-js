const routes = require('./routes');


const express = require('express' );
const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');
const app = express();

app.use('/', routes);

app.use(bodyParser.urlencoded({ extended: false}))

// app.use(bodyParser.raw ({ extended: false}))

// app.use(bodyParser.json())

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates;

app.listen(3000, function(){
	console.log("server listening");
});



// Put middleware in the beginning to deal with different requests
// Customary to use console.log because middleware doesn't want to interfere with request/response
app.use(function(request, response, next){
	console.log("USE " + request.originalUrl);
	next();
});

// Don't put in next at the end of every app function
app.get('/stylesheets/style.css', function(request, response, next){
	console.log('test');

	// absolute path
	response.sendFile('/Users/karinayang/Desktop/graceHopper/workshops/twitter-js/public/stylesheets/style.css');
	// response.sendFile('/Users/Monica/GHP/twitter-js/public/stylesheets/style.css');
});


// app.get("/", function(request, response, next){
// 	console.log("status code: " + response.statusCode);
// 	response.render('index', {title: 'Hall of Fame', people: people});
// 	next();
// });

// // 	Leave next [even in the last function] for error handling
// app.get('/special', function(request, response, next){
// 	console.log("GET " + request.originalUrl);
// 	response.send("you've reached the special area");
// 	next();
// });

