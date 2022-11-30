#!/usr/bin/env node
// test
import {roll} from "./lib/roll.js";
import minimist from "minimist";
import express from "express";
const app = express();
var args = process.argv.slice(2);
var parsedArgs = minimist(args);

const port = parsedArgs.port || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app/', (req, res, next) => {
	res.status(200).send('200 OK');
	
});
app.post('/app/roll/', (req, res) => {
	// accept JSON or URLEncoded data body?
	// req.body for the data body
	// req.params for  everything before the ? in URL string
	// valid param names defined by us
	res.send(roll(6, 2, 1));
	
});
app.get('/app/roll/:sides/', (req, res) => {
	 // return JSON for default num of rolls/dice with whatever num sides
	 res.send(roll(parseInt(req.params.sides), 2, 1));
});
app.get('app/roll/:sides/:dice/', (req, res) => {
	//return json w/ default num/rolls w/ whatever num sides/dice
	res.send(roll(parseInt(req.params.sidesi), parseInt(req.params.dice), 1));
});
app.get('app/roll/:sides/:dice/:rolls/', (req, res) => {
	//return json w/ given params for roll-dice
	res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls));
});
app.get('*', (req, res, next) => {
	res.status(404).send('404 NOT FOUND');
}
app.listen(port, () => {
	console.log("Server listening on port " + port);
});
