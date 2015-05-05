var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser')
var jfive = require('johnny-five');
var Raspi = require('raspi-io');
var board = new jfive.Board({
  io: new Raspi() 
});

app.use(logger('dev'));
app.use(express.static('app'));
app.use( bodyParser.json() );

var relay = null;

app.post('/action/on', function (req, res) {
	console.log('ACTION: On');

	relay.on();

	res.sendStatus(200);
});

app.post('/action/off', function (req, res) {
	console.log('ACTION: Off');

	relay.off();

	res.sendStatus(200);
});

app.post('/action/blink', function (req, res) {
	console.log('ACTION: Blink');

	var delay = req.body.delay;
	if (delay) {
		relay.blink(delay);
	}

	res.sendStatus(200);
});

app.post('/action/stop', function (req, res) {
	console.log('ACTION: Stop');

	relay.stop();

	res.sendStatus(200);
});


board.on('ready', function () {
  relay = new jfive.Relay('P1-10');

  var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

  });

});

