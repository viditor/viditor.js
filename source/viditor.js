var Reqwest = require("reqwest")
var Bluebird = require("bluebird")

window.Viditor = {
	getYoutubeVideo: function() {
		return new Bluebird(function(resolve, reject) {
			Reqwest({
				"method": "POST",
				"contentType": "application/json",
				"url": "http://localhost:8080/v2/fusion",
				"data": JSON.stringify({
					"format": "mp4"
				}),
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
