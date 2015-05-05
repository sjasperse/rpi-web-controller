var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser')
var relayFactory = require('./relay-factory.js');
var relay = relayFactory.create();

app.use(logger('dev'));
app.use(express.static('app'));
app.use( bodyParser.json() );

app.post('/action/on', function (req, res) {
	relay.on();

	res.sendStatus(200);
});

app.post('/action/off', function (req, res) {
	relay.off();

	res.sendStatus(200);
});

app.post('/action/toggle', function (req, res) {
	relay.toggle();

	res.sendStatus(200);
});

app.post('/action/blink', function (req, res) {
	var delay = req.body.delay;
	if (delay) {
		relay.blink(delay);
		res.sendStatus(200);
	} else {
		res.sendStatus(500, 'delay period was not supplied');
	}

});

app.post('/action/stop', function (req, res) {
	relay.stop();

	res.sendStatus(200);
});


var server = app.listen(3000, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

});

