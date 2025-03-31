const express = require("express");
const route = express.Router();

//importing controller functions
const { userSignup, loginUser } = require("../Controller/userController");
const { makeOrder } = require("../Controller/orderController");
const { displayProduct } = require("../Controller/productController");
const paystackController = require("../Controller/paystackController");
const {
  isAdmin,
  getAllUsers,
  getAllOrders,
} = require("../Controller/adminController");

//CRUD Operators
route.post("/user", userSignup);
route.post("/order", makeOrder);
route.post("/product", displayProduct);
route.post("/payment/initialize", paystackController.purchaseProduct);
route.get("/login", loginUser);
route.get("/admin", isAdmin);
route.get("/allusers", getAllUsers);
route.get("/allorders", getAllOrders);

//exporting route
module.exports = route;
