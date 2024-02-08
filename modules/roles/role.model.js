const { Schema, model } = require("mongoose");

const roleSchema = new Schema({
  
   author: { type: String },
  editor: { type: String},
  phone:{type:String},
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports =new model("Role", roleSchema);