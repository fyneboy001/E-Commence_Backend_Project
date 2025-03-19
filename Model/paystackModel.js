const mongoose = require("mongoose");

const paystackSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  amountPaid: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  paymentReference: {
    type: String,
    required: false,
  },
});

const paystackModel = mongoose.model("Paystack", paystackSchema);

module.exports = paystackModel;
