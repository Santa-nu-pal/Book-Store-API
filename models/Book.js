const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  Title: String,
  Author: String,
  Category: String,
  Price: Number,
  Rating: Number,
  Published_Date: Date,
});

module.exports = mongoose.model('Book', BookSchema);
