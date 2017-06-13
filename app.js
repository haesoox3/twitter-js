const express = require( 'express' );
const nunjucks = require( 'nunjucks');
const app = express();

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};


// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output){
// 	console.log(output);
// });


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates;
// Turn off Nunjuck's caching in app.js by turning on the noCache option in nunjucks.configure, like so: nunjucks.configure('views', { noCache: true }).


app.listen(3000, function(){
	console.log("server listening");
});

// Put middleware in the beginning to deal with different requests
// Customary to use console.log because middleware doesn't want to interfere with request/response
app.use(function(request, response, next){
	console.log("USE " + request.originalUrl);
	next();
});

app.get("/", function(request, response, next){
	console.log("status code: " + response.statusCode);
	response.send("Welcome!");
	next();
});

// 	Leave next [even in the last function] for error handling
app.get('/special', function(request, response, next){
	console.log("GET " + request.originalUrl);
	response.send("you've reached the special area");
	next();
});

