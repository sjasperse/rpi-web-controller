var express = require('express');
var app = express();
var logger = require('morgan');


app.use(logger('dev'));
app.use(express.static('app'));


app.post('/action/on', function (req, res) {
	console.log('ACTION: On');

	res.sendStatus(200);
});

app.post('/action/off', function (req, res) {
	console.log('ACTION: Off');

	res.sendStatus(200);
});








var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

