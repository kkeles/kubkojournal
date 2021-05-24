const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

// middleware
app.use(bodyParser.json());
app.use(cors());

// mongoose connection
mongoose.connect(`mongodb+srv://kkUser:${process.env.MONGO_KEY}@kubus.skllo.mongodb.net/kubkoDB`, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

// walkSchema
const walkSchema = {
	walkDate: Number,
	walkDuration: Number,
	pooped: Boolean,
	peed: Boolean
};

const Walk = mongoose.model('Walk', walkSchema);

// foodSchema
const foodSchema = {
	foodTime: Number,
	foodGr: { type: Number, require: true },
	treated: Boolean,
	treatQuantity: Number
};

const Food = mongoose.model('Food', foodSchema);

// API Routes

app.get('/foods', function(req, res) {
	Food.find().then((foods) => res.json(foods));
});

app.get('/walks', function(req, res) {
	Walk.find().then((walks) => res.json(walks));
});

// Add New Food
app.post('/newFood', function(req, res) {
	const foodTime = new Date();
	const foodGr = req.body.foodGr;
	const treated = req.body.treated;
	const treatQuantity = req.body.treatQuantity;
	const newFoodEntry = new Food({ foodTime, foodGr, treated, treatQuantity });

	newFoodEntry.save();
});

// Add New Walk
app.post('/newWalk', function(req, res) {
	const walkDate = new Date();
	const walkDuration = parseInt(req.body.walkDuration);
	const pooped = req.body.pooped;
	const peed = req.body.peed;
	const newWalkEntry = new Walk({ walkDate, walkDuration, pooped, peed });
	newWalkEntry.save();
});

// acquire react file, if the environment is in production mode
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// activate express?
app.listen(port, function() {
	console.log('express is running');
});
