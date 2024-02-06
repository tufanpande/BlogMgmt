const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  
  name: { type: String },
  email: { type: String},
  phone:{type:String},
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports =new model("User", userSchema);