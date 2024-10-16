

const mongoose = require('mongoose');

const databaseSchema = new mongoose.Schema({
	userName: { type: String, required: true },
	word_typed: { type: [Number] , required: true },
});

const   Database = mongoose.model('Database', databaseSchema);

module.exports = Database;