var Bluebird = require("bluebird")

var Viditor = {
	getYoutubeVideo: function() {
		return new Bluebird(function(resolve, reject) {
			window.setTimeout(function() {
				resolve("OK")
			}, 1000)
		})
	}
}

//todo: publish to bower and npm.
//todo: write a readme.

module.exports = Viditor
