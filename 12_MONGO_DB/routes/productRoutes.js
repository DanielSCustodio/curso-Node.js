const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");
router.get("/create", ProductController.createProduct);
router.get("/", ProductController.showProducts);
router.get("/edit/:id", ProductController.editProduct);
router.get("/:id", ProductController.getProduct);

router.post("/create", ProductController.createProductSave);
router.post("/edit", ProductController.editProductSave);
router.post("/remove/:id", ProductController.removeProduct);

module.exports = router;
