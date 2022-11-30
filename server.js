#!/usr/bin/env node
// test
const {roll} = require('./lib/roll.js');
const minimist = require('minimist');
const express = require('express');
const app = express();

var args = process.argv.slice(2);
const port = args.port || 5000;

app.get('/', (req, res, next) => { // endpoint
	res.send('Hello, world!');
})

app.listen(port, () => {
	console.log("Server listening on port " + port);
})
