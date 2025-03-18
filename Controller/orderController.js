const userModel = require("../Model/userModel");
const orderModel = require("../Model/orderModel");
const productModel = require("../Model/productModel");

const makeOrder = async (req, res) => {
  const {
    userId,
    productId,
    quantity,
    shippingAddress,
    country,
    state,
    city,
    postalCode,
    paymentMethod,
  } = req.body;

  //validate all fields
  if (
    ![
      userId,
      productId,
      quantity,
      shippingAddress,
      country,
      state,
      city,
      postalCode,
      paymentMethod,
    ].every(Boolean)
  ) {
    return res.status(400).json("Please provide all required fields");
  }

  try {
    //check if users exist
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json("User not found");

    //check if product exist
    const product = await productModel.findById(productId);
    if (!product) return res.status(400).json("Product is out of stock");

    //check if quantity ordered is available
    if (product.availableQuantity < quantity) {
      return res.json("Quantity available is less than your Order");
    }

    //concatinate username
    const userName = `${user.firstName}, ${user.lastName}, ${user.otherNames}`;

    //make an order
    const newOrder = new orderModel({
      userId,
      userName,
      shippingAddress,
      productId,
      country,
      state,
      city,
      isDelivered: false,
      paymentMethod,
      quantity,
      postalCode,
      isCart: true,
    });

    //save order
    await newOrder.save();
    res.status(201).json("Order placed and successfully added to Cart");
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};
module.exports = { makeOrder };
