const express = require('express');
// const Walk = require('../models/walkModel');

app.get('/walks', function(req, res) {
	Walk.find().then((walks) => res.json(walks));
});

app.post('/newWalk', function(req, res) {
	const walkDate = new Date();
	const walkDuration = parseInt(req.body.walkDuration);
	const pooped = req.body.pooped;
	const peed = req.body.peed;
	const newWalkEntry = new Walk({ walkDate, walkDuration, pooped, peed });
	newWalkEntry.save();
});
