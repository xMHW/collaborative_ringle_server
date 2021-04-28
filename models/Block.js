const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors = require("cors")


// Create Block Schema
const BlockSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
});

// Export the Schema
module.exports = Block = mongoose.model("Blocks", BlockSchema);