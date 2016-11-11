var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', 3000);

// Console logging
app.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

// Routes //
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);


// Start server
var server = app.listen(app.get('port'), function(){
	var port = server.address().port;
console.log(`listening on Port: ${port}`);
});


