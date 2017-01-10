"use strict";

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const config = require('./config.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	
	switch(req.query.action) {
		case 'listFiles': {
			if (!fs.existsSync(req.query.path)) {
				fs.mkdirSync(req.query.path);
			}
			const files = fs.readdirSync(req.query.path);
			const items = files.map((entry) => {
				return {
					name: entry,
					isDirectory: fs.lstatSync(req.query.path + "/" + entry).isDirectory()
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
			res.send(fs.readFileSync(req.query.path));
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
			fs.writeFileSync(req.body.filename, req.body.content);
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
