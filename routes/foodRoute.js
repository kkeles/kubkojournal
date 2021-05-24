const express = require('express');
const Food = require('../models/foodModel');

app.post('/newFood', function(req, res) {
	const foodTime = new Date();
	const foodGr = req.body.foodGr;
	const treated = req.body.treated;
	const treatQuantity = req.body.treatQuantity;
	const newFoodEntry = new Food({ foodTime, foodGr, treated, treatQuantity });

	newFoodEntry.save();
});
