const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

consign()
	.include('/routes')
	.then('/controllers')
	.then('/database/dao')
	.into(app);

module.exports = app;
