const productModel = require("../Model/productModel");

const displayProduct = async (req, res) => {
  const { productName, availableQuantity, price, categories } = req.body;

  if (![productName, availableQuantity, price, categories]) {
    return res.status(404).json("Product not available");
  }
  try {
    const newProduct = new productModel({
      productName,
      availableQuantity,
      price,
      categories,
    });
    await newProduct.save();
    res.status(201).json("Product displayed on webpage successfully");
  } catch (error) {
    console.log(error);
    res.status(400).send("Unable to display product on webpage");
  }
};

module.exports = { displayProduct };
