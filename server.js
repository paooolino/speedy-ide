const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const config = require('./config.js');

const port = 8081;

app.get('/', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	
	switch(req.query.action) {
		case 'openProject':
			const path = config.PROJECT_ROOT + req.query.path;
			if (!fs.existsSync(path)) {
				fs.mkdirSync(path);
			}
			const files = fs.readdirSync(path);
			const items = files.map((entry) => {
				return {
					name: entry,
					isDirectory: fs.lstatSync(path + entry).isDirectory()
				}
			});
			res.set('Access-Control-Allow-Origin', '*');
			res.send(JSON.stringify(items));
			break;
			
		default:
			res.send(".");
	}
});

const server = app.listen(port, function () {
  console.log('Node app listening on port ' + port);
})

module.exports = server;
