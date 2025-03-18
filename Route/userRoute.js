const express = require("express");
const route = express.Router();

//importing controller functions
const { userSignup } = require("../Controller/userController");
const { makeOrder } = require("../Controller/orderController");
const { displayProduct } = require("../Controller/productController");

//CRUD Operators
route.post("/user", userSignup);
route.post("/order", makeOrder);
route.post("/product", displayProduct);

//exporting route
module.exports = route;
