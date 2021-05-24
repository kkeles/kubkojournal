const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const Walk = require('./models/walkModel');
const Food = require('./models/foodModel');
const port = process.env.PORT || 5000;

// middleware
app.use(bodyParser.json());
app.use(cors());

// mongoose connection
mongoose.connect(
	`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_KEY}@kubus.skllo.mongodb.net/${process.env
		.MONGO_DBNAME}`,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true
	}
);

// API Routes

app.get('/foods', function(req, res) {
	Food.find().then((foods) => res.json(foods));
});

app.get('/walks', function(req, res) {
	Walk.find().then((walks) => res.json(walks));
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
