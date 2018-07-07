var network = require('./lib/network')

var main = () => {
	var devices = network.getDevices();
	if (devices.length > 0) {
		console.log(devices[0]);
	}
}
	

setInterval(main, 5000)
