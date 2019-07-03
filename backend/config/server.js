const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const app = express();

global.qrCodeKey = "";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	res.setHeader(
	  "Access-Control-Allow-Methods",
	  "GET, POST, PATCH, PUT, DELETE, OPTIONS"
	);
	next();
  });

consign()
	.include('/routes')
	.then('/controllers')
	.then('/database/dao')
	.into(app);

module.exports = app;
