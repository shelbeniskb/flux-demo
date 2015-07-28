var data = require('./data.json');
module.exports = {
	getData: function(cb) {
		setTimeout(function() {
			cb(data);
		}, 100)
	}
}