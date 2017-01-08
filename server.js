"use strict";

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	
	switch(req.query.action) {
		case 'listFiles': {
			let path = config.PROJECT_ROOT + req.query.path;
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
			const sorted_items = items.slice(0).sort((a, b) => {
				if (a.isDirectory > b.isDirectory) {
					return 1;
				}
				if (a.isDirectory < b.isDirectory) {
					return -1;
				}
				// if here, both are directories or files
				if (a.name > b.name) {
					return 1;
				}
				return -1;
			});
			res.set('Access-Control-Allow-Origin', '*');
			res.send(JSON.stringify(items));
			break;
		}	

		case 'openFile': {
			let path = config.PROJECT_ROOT + req.query.path;
			res.send(fs.readFileSync(path));
			break;
		}
		
		default: {
			res.send("");
		}
	}
});

app.post('/', function(req, res){
	res.set('Access-Control-Allow-Origin', '*');

	switch(req.body.action) {
		case 'saveFile': {
			let path = config.PROJECT_ROOT + req.body.filename;
			fs.writeFileSync(path, req.body.content);
			res.send('');
			break;
		}
		
		default: {
			res.send("");
		}
	}
});

const server = app.listen(config.SERVER_PORT, function () {
  console.log('Node app listening on port ' + config.SERVER_PORT);
})

module.exports = server;
