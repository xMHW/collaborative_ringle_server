const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Product Schema
const LocSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  refs: {
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
module.exports = Tree = mongoose.model("Locs", LocSchema);