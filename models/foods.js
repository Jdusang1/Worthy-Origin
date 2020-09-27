const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating template for database data to be stored in Mongo.db collection 
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

//schema being stored in variable 
const Foods = mongoose.model("Foods", foodsSchema);

module.exports = Foods;
