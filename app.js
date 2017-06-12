const express = require( 'express' );
const app = express();

app.listen(3000, function(){
	console.log("server listening");
});

app.get('/', function(request, response, next){
	response.send("Welcome!");
})