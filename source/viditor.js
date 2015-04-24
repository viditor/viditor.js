var Reqwest = require("reqwest")

window.Viditor = {
	nimbus_url: "http://localhost:8080",
	fusion: function(protovideo, callback) {
		Reqwest({
			"method": "POST",
			"contentType": "application/json",
			"url": this.nimbus_url + "/v2/fusion",
			"data": JSON.stringify(protovideo),
			"type": "json"
		})
		.then(function(response) {
			callback(response)
		})
	}
}

//todo: publish to npm.
//todo: write a readme.

module.exports = Viditor
