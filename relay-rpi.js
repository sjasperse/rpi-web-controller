var jfive = require('johnny-five');
var Raspi = require('raspi-io');
var board = new jfive.Board({
  io: new Raspi() 
});

var relay = null;

board.on('ready', function () {
  relay = new jfive.Led('P1-10'); // Led object gives us access to the blink functions.
  console.log('RELAY: Relay ready');
});

exports.on = function () { 
	if (relay) { relay.on(); }
};
exports.off = function () { 
	if (relay) { relay.off(); }
};
exports.toggle = function () { 
	if (relay) { relay.toggle(); }
};
exports.blink = function (delay) { 
	if (relay) { relay.blink(delay); }
};
exports.stop = function () { 
	if (relay) { relay.stop(); }
};




