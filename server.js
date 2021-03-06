'use strict';

var AlexaAppServer = require('alexa-app-server');

AlexaAppServer.start({
	server_root: __dirname,     // Path to root
	public_html: "public_html", // Static content
	app_dir: "apps",            // Location of alexa-app modules
	app_root: "",        // Service root // empty in our case
	port: 8080 || 80 || process.env.PORT,                 // Port to use
	httpsEnabled: false
});
