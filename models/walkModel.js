const mongoose = require('mongoose');

const walkSchema = {
	walkDate: Number,
	walkDuration: Number,
	pooped: Boolean,
	peed: Boolean
};

const Walk = mongoose.model('Walk', walkSchema);

module.exports = Walk;
