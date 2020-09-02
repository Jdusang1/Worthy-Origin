const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groceriesSchema = new Schema({
  item: {
    type: String,
    trim: true,
    required: true
  },

  carMiles: {
    type: Number
  },

  ghgEmission: {
    type: Number
  }
});

const Groceries = mongoose.model("Groceries", foodsSchema);

module.exports = Groceries;