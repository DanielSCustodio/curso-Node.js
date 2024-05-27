const Product = require("../models/Product");

module.exports = class ProductController {
  static async showProducts(_req, res) {
    const products = await Product.getProducts();
    res.render("products/all", { products });
  }

  static createProduct(_req, res) {
    res.render("products/create");
  }

  static createProductSave(req, res) {
    const { name, image, price, description } = req.body;
    const product = new Product(name, image, price, description);
    product.save();
    res.redirect("/products");
  }
};
