const express = require("express");
const route = express.Router();

//importing order functions
const { makeOrder } = require("../Controller/orderController");

//Crud operators
route.post("/order", makeOrder);

module.export = route;
