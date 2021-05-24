const express = require('express');
const Walk = require('../models/walkModel');
const router = express.Router();

router.route('/walks').get((req, res) => {
	Walk.find().then((walks) => res.json(walks));
});

router.route('/newWalk').post((req, res) => {
	const walkDate = new Date();
	const walkDuration = parseInt(req.body.walkDuration);
	const pooped = req.body.pooped;
	const peed = req.body.peed;
	const newWalkEntry = new Walk({ walkDate, walkDuration, pooped, peed });
	newWalkEntry.save();
});

module.exports = router;
