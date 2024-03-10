const Product = require("../models/Product");

module.exports = class ProductController {
  static showProducts(_req, res) {
    res.render("products/all");
  }

  static createProduct(_req, res) {
    res.render("products/create");
  }

  static createProductSave(req, res) {
    const { name, price, description } = req.body;

    const product = new Product(name, price, description)

    product.save();

    res.redirect('/products')
  }
};
