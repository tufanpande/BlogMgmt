const blogModel = require("./blog.model");

// Create
const create = (payload) => {
  return blogModel.create(payload);
};

// Read - Get all blogs
const get = () => {
  return blogModel.aggregate([
    
      {
        '$lookup': {
          'from': 'users', 
          'localField': 'author', 
          'foreignField': '_id', 
          'as': 'author'
        }
      }, {
        '$unwind': {
          'path': '$author', 
          'preserveNullAndEmptyArrays': false
        }
      }, {
        '$project': {
          'author': '$author.name', 
          'title': 1, 
          'pages': 1, 
          'content': 1
        }
      }
    
  ]);
};

// Read - Get a specific blog by ID
const getById = (_id) => {
  return blogModel.findOne(_id);
};

// Update - Update a blog by ID
const updateById = (_id, payload) => {
  return blogModel.updateOne(_id, payload, { new: true });
};

// Delete - Delete a blog by ID
const removeById = (_id) => {
  return blogModel.deleteOne(_id);
};

module.exports = { create, get, getById, updateById, removeById };