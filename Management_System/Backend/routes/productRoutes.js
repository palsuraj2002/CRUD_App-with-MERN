const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController.js");

const router = express.Router();

router.get("/showProduct", getAllProducts);
router.post("/addProduct", createProduct);
router.patch("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/showOneProduct/:id", getProductById);

module.exports = router;
