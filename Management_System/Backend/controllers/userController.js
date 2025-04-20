const userModel = require("../models/userModel.js");

const getAllUsers = async (req, res) => {
  const result = await userModel.find();
  res.json(result);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const result = await userModel.findById(id);
  res.json(result);
};

const createUser = async (req, res) => {
  const data = new userModel(req.body);
  const result = await data.save();
  res.json(result);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, position } = req.body;
  const result = await userModel.findByIdAndUpdate(
    { _id: id },
    { name, email, position }
  );
  res.json(result);
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await userModel.findByIdAndDelete({ _id: id });
  res.json({
    message: "data deleted",
    data: result,
  });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
