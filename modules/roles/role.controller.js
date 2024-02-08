const roleModel = require("./role.model");

// Create
const create = (payload) => {
  return roleModel.create(payload);
};

// Read - Get all blogs
const get = () => {
  return roleModel.find();
};

// Read - Get a specific blog by ID
const getById = (_id) => {
  return roleModel.findOne({_id});
};

// Update - Update a blog by ID
const updateById = (_id, payload) => {
  return roleModel.updateOne({_id}, payload, { new: true });
};

// Delete - Delete a blog by ID
const removeById = (_id) => {
  return roleModel.deleteOne({_id});
};

module.exports = { create, get, getById, updateById, removeById };