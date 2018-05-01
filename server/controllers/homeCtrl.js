var path = require('path');
module.exports = {
	landingPage: function (req, res) {
		res.sendFile('index.html',
			{ root: path.join(__dirname, '../../client/templats') });
	}
};  