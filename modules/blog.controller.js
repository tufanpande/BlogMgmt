const BlogModel = require("./blog.model");

// Create
const create = (payload) => {
  return BlogModel.create(payload);
};

// Read - Get all blogs
const get = () => {
  return BlogModel.find();
};

// Read - Get a specific blog by ID
const getByID = (_id) => {
  return BlogModel.findOne(_id);
};

// Update - Update a blog by ID
const updateByID = (_id, payload) => {
  return BlogModel.updateOne(_id, payload, { new: true });
};

// Delete - Delete a blog by ID
const removeByID = (_id) => {
  return BlogModel.deleteOne(_id);
};

module.exports = { create, get, getByID, updateByID, removeByID };