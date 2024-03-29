

// schema=>model => controller=>api()
const { Schema, model } = require("mongoose");

const BlogSchema = new Schema({
  
  title: { type: String, required: true },
  author: { type: String, required: true },
  
  pages:{type:Number,required:true},

  content: { type: String, required: true },

  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = model("Blog", BlogSchema);