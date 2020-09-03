const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodsSchema = new Schema({
  reference: {
    type: String,
    trim: true,
    required: true
  },

  country: {
    type: String,
    trim: true,
    required: true
  },

  ghgEmission: {
    type: Number
  },

  genre: {
    type: String,
    trim: true,
    required: true
  }

});

const Foods = mongoose.model("Foods", foodsSchema);

module.exports = Foods;
