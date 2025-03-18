const dotenv = require("dotenv");

module.exports = {
  paystacksecret: process.env.PAYSTACK_SECRET,
  paystackUrl: process.env.PAYSTACK_URL || "https://api.paystack.co",
  mongodburl: process.env.MONGODB_URL,
};
