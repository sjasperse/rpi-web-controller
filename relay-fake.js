console.log('RELAY: Fake relay loaded');

exports.on = function () { console.log('RELAY: on()'); };
exports.off = function () { console.log('RELAY: off()'); };
exports.toggle = function () { console.log('RELAY: toggle()'); };
exports.blink = function (delay) { console.log('RELAY: blink(' + delay + ')'); };
exports.stop = function () { console.log('RELAY: stop()'); };



