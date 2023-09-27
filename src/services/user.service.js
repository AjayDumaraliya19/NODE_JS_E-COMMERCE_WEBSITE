const { User } = require("../models");

/** Create User */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/** Get User list */
const getUserList = async () => {
  return User.find({ $or: [{ is_active: true }] });
};

/** Get User details by Id */
const getUserById = async (userId) => {
  return User.findById(userId);
};

/** User details update by Id */
const updateUser = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

/** Delete User */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
};
