var Reqwest = require("reqwest")
var Bluebird = require("bluebird")

window.Viditor = {
	fusion: function(protovideo) {
		return new Bluebird(function(resolve, reject) {
			Reqwest({
				"method": "POST",
				"contentType": "application/json",
				"url": "http://localhost:8080/v2/fusion",
				"data": JSON.stringify(protovideo),
				"type": "json"
			})
			.then(function(response) {
				resolve(response)
			})
		})
	}
}

//todo: publish to npm.
//todo: write a readme.

module.exports = Viditor
