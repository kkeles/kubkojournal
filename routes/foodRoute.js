const express = require('express');
const Food = require('../models/foodModel');
const router = express.Router();

router.route('/foods').get((req, res) => {
	Food.find().then((foods) => res.json(foods));
});

router.route('/newFood').post((req, res) => {
	const foodTime = new Date();
	const foodGr = req.body.foodGr;
	const treated = req.body.treated;
	const treatQuantity = req.body.treatQuantity;
	const newFoodEntry = new Food({ foodTime, foodGr, treated, treatQuantity });

	newFoodEntry.save();
});

module.exports = router;
