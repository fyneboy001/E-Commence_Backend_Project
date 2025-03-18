const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Route/userRoute");
//const orderRoute = require("./Route/orderRoute");
app.use(express.json());
app.use(userRoute);
//app.use(orderRoute);

//connecting Express application to mongodb database
//const { MONGODB_URL } = process.env;
mongoose
  .connect(
    "mongodb+srv://fyneboyfynerose:fyneboyrosemary@e-commence-backend.vq81p.mongodb.net/Fyneboy"
  )
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch(() => {
    console.log("Something went wrong");
  });

app.listen(6000, () => {
  console.log("app is running effectively");
});
