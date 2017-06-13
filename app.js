const express = require( 'express' );
const app = express();

app.listen(3000, function(){
	console.log("server listening");
});

// Put middleware in the beginning to deal with different requests
app.use(function(request, response, next){
	response.send("USE " + request.originalUrl);
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

