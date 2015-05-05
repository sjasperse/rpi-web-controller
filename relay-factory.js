exports.create = function () {
	var os = require('os');

	var arch = os.arch();
	if (arch != 'arm') {
		return require('./relay-fake.js');		
	}
	else {
		return require('./relay-rpi.js');		
	}
}