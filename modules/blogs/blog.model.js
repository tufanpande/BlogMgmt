

// schema=>model => controller=>api()
const { Schema, model } = require("mongoose");
const{ObjectId}= Schema.Types;

const blogSchema = new Schema({
  
  title: { type: String },
  author: { type: ObjectId,ref:"User", required: true },
  
  pages:{type:Number},

  content: { type: String, required: true },

  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports =new model("Blog", blogSchema);