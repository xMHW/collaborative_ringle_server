const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cors = require("cors")


// Create Product Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
});

// Export the Schema
module.exports = Product = mongoose.model("Products", ProductSchema);