const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    userName: { type: String, required: true },
    // product: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product",
    //     required: true,
    // },
    // shippingAddress: {
    //   // fullName: { type: String, required: true },
    //   address: { type: String, required: true },
    //   city: { type: String, required: true },
    //   postalCode: { type: String, required: true },
    //   country: { type: String, required: true },
    shippingAddress: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    productReference: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    isDelivered: {
      type: Boolean,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    postalCode: {
      type: Number,
      required: false,
    },
    isCart: {
      type: Boolean,
    },

    // paymentResult: {
    //   id: String,
    //   status: String,
    //   update_time: String,
    //   email_address: String,
    // },
    // itemsPrice: { type: Number, required: true },
    // shippingPrice: { type: Number, required: true },
    // taxPrice: { type: Number, required: true },
    // totalPrice: { type: Number, required: true },
    // user: { type: String, required: true },
    // isPaid: { type: Boolean, default: false },
    // paidAt: { type: Date },
    // isDelivered: { type: Boolean, default: false },
    // deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;
