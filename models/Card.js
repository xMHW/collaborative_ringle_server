const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Product Schema
const CardSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  content: {
    type: String,
    required: true
  },
  created: {
    type: String,
    required: true
  },
  updater: {
    type: String,
    required: true
  },
  cardposition: {
    type: Number,
    required: true
  }
});

// Export the Schema
module.exports = Card = mongoose.model("Cards", CardSchema);