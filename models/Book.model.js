"use strict";

var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
	title: String,
	announcement: {
		type: Date,
		default: Date.now
	},
	published: Boolean
});

module.exports = mongoose.model('Book', BookSchema);