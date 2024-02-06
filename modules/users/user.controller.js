const userModel = require("./user.model");

// Create
const create = (payload) => {
  return userModel.create(payload);
};

// Read - Get all blogs
const get = () => {
  return userModel.find();
};

// Read - Get a specific blog by ID
const getById = (_id) => {
  return userModel.findOne({_id});
};

// Update - Update a blog by ID
const updateById = (_id, payload) => {
  return userModel.updateOne({_id}, payload, { new: true });
};

// Delete - Delete a blog by ID
const removeById = (_id) => {
  return userModel.deleteOne({_id});
};

module.exports = { create, get, getById, updateById, removeById };