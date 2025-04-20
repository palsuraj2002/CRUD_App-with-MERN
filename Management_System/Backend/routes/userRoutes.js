const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/userController.js");
const router = express.Router();

// --- User CRUD Routes ---
router.get("/getUsers", getAllUsers);
router.post("/addUser", createUser);
router.patch("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.get("/getOneUser/:id", getUserById);

module.exports = router;
