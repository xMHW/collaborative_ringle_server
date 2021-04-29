const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Product Schema
const TreeSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  cards: {
    type: Array,
    required: true
  },
  page: {
      type: Number,
      required: true,
      unique: true
  }
});

// Export the Schema
module.exports = Tree = mongoose.model("Trees", TreeSchema);