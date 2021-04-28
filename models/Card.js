const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors = require("cors")


// Create Product Schema
const CardSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  content: {
    type: Object,
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
});

// Export the Schema
module.exports = Card = mongoose.model("Cards", CardSchema);