

// schema=>model => controller=>api()
const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  
  title: { type: String, required: true },
  author: { type: String, required: true },
  
  pages:{type:Number,required:true},

  content: { type: String, required: true },

  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports =new model("Blog", blogSchema);