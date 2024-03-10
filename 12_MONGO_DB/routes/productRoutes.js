const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/create", ProductController.createProduct);
router.get("/", ProductController.showProducts);

router.post("/create", ProductController.createProductSave);

module.exports = router;
