const express = require('express');
const bodyParser = require('body-parser');

const index = express();

//middleware
index.set('view engine', 'pug');
index.use(bodyParser.urlencoded({ extended: true })); // ? & +

//routing
index.get('/', function(request, response) {
	return response.redirect('/base');
});
index.get('/base/addform', function(request, response) {
	return response.render('addform');
});
index.get('/base/subtractform', function(request, response) {
	return response.render('subtractform');
});
index.get('/base/multiplicationform', function(request, response) {
	return response.render('multiplicationform');
});
index.get('/base/divisionform', function(request, response) {
	return response.render('divisionform');
});

//handlers. These tell the pages what to do.
index.get('/base', function(request, response) {
	return response.send('Welcome to the base route!<br>You can type /addform, /subtractform, /multiplicationform, or /divisionform to access the other routes on the site.');
});

index.get('/addform', function(request, response) {
	var n1 = parseFloat(request.query.first); //turns the string into a number
	var n2 = parseFloat(request.query.second);
	var Total = n1 + n2;
	return response.send({Total});
});

index.get('/subtractform', function(request, response) {
	var n1 = parseFloat(request.query.first); //turns the string into a number
	var n2 = parseFloat(request.query.second);
	var Total = n1 - n2;
	return response.send({Total});
});

index.get('/multiplicationform', function(request, response) {
	var n1 = parseFloat(request.query.first); //turns the string into a number
	var n2 = parseFloat(request.query.second);
	var Total = n1 * n2;
	return response.send({Total});
});

index.get('/divisionform', function(request, response) {
	var n1 = parseFloat(request.query.first); //turns the string into a number
	var n2 = parseFloat(request.query.second);
	var Total = n1 / n2;
	return response.send({Total});
});

//start server

const PORT = process.env.PORT || 3000;
index.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
