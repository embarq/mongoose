"use strict";

var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	description: String,
	author: {
		type: String,
		required: true
	},
	publisher: String,
	pages: Number,
	image_url: String,
	buy_url: String,
	create_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Book', BookSchema);