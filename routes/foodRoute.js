const express = require('express');
// const Food = require('../models/foodModel');

app.get('/foods', function(req, res) {
	Food.find().then((foods) => res.json(foods));
});

app.post('/newFood', function(req, res) {
	const foodTime = new Date();
	const foodGr = req.body.foodGr;
	const treated = req.body.treated;
	const treatQuantity = req.body.treatQuantity;
	const newFoodEntry = new Food({ foodTime, foodGr, treated, treatQuantity });

	newFoodEntry.save();
});
