const orderModel = require("../Model/orderModel");
const userModel = require("../Model/userModel");
const jwt = require("jsonwebtoken");

//Function to determine an Admin user
const isAdmin = async (token) => {
  if (!token) {
    console.log("There's no token");
    return false;
  }

  console.log("This is the token", token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log("This is the decoded token", decoded);
  const user = await userModel.findById(decoded.id);

  if (!user) {
    return false;
  }

  if (!user.isAdmin) {
    return false;
  }
  return true;
};

//function to get all users

const getAllUsers = async (req, res) => {
  const token = req.cookies;
  console.log(req.cookies);

  if (!token) {
    return res
      .status(403)
      .json("There's no token associated with this request");
  }

  const isVerifiedAdmin = isAdmin(token);

  if (isVerifiedAdmin) {
    try {
      const users = await userModel.find();
      if (!users) {
        return res.status(404).json("No user found");
      }
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json("Unable to fetch users");
    }
  }
};

//Function to get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    if (!orders) {
      return res.status(404).json("No order found");
    }
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json("Unable to fetch orders");
  }
};

module.exports = { isAdmin, getAllUsers, getAllOrders };
