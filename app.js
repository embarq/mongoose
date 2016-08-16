"use strict";

var fs = require('fs'),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');
var Book = require('./models/Book.model');
var db = 'mongodb://localhost/example';
var port = 3000;

mongoose.connect(db);

app.listen(port, function() {
	console.log(`Listening port ${port}`);
});

function import(path) {
	path = path == null ? './data.json' : path;
	let parsed = JSON.parse(fs.readFileSync(path));
	for (let entry in parsed['data']) {
		let book = Book(parsed['data'][entry]).save(function(err) {
			if (err) {
				throw err;
			}

			console.log(`Book "${entry['title']}" created`);
		});
	}
}