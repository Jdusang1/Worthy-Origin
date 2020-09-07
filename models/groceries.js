const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defining model for grocery array in User collection
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

const Groceries = mongoose.model("Groceries", groceriesSchema);

module.exports = Groceries;