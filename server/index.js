const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');
const carsController = require('./controller');
const basicAuth = require('express-basic-auth');
const app = express();

app.use(basicAuth({
	users: config.basicAuthCreds
}));

app.use(bodyParser.json());
app.all('/cars/:id?', (req, res) => {
	const method = req.method.toLowerCase();
	let p = Promise.resolve('Unsupported method');
	var reqObj = {
		params: req.params,
		query: req.query,
		body: req.body
	};
	switch (method) {
	case 'get':
		p = carsController.get(reqObj);
		break;
	case 'post':
		p = carsController.create(reqObj);
		break;
	case 'put':
		p = carsController.update(reqObj);
		break;
	case 'delete':
		p = carsController.delete(reqObj);
		break;
	}
	p.then((data) => {
		console.log(req.method, 'on', req.url, 'succeded');
		res.send(data);
	})
		.catch((err) => {
			console.log(req.method, 'on', req.url, 'errored with value', err);
			res.status(500).send({
				error: 'Operation failed: ' + err.toString()
			});
		});
});

module.exports = app;
