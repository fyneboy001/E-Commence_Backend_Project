const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Route/userRoute");
const cookieParser = require("cookie-parser");
require("dotenv").config();
//const orderRoute = require("./Route/orderRoute");
app.use(express.json());
app.use(userRoute);
//app.use(orderRoute);

//connecting Express application to mongodb database
const { MONGODB_URL } = process.env;
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch(() => {
    console.log("Something went wrong");
  });

app.listen(6000, () => {
  console.log("app is running effectively");
});
