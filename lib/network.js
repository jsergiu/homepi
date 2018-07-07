var LocalDevices = require('local-devices');

var networkDevices = [];

LocalDevices().then(devices => {
	networkDevices = [];

	devices.forEach(d => {
		if (d.name !== '?') {
			networkDevices.push({
				name: d.name,
				ip: d.ip,
				mac: d.mac,
			}) 
		}
	})
})

const getDevices = () => {
	return networkDevices;
}


module.exports = {
	getDevices,
}
