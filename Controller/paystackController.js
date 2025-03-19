const paystackModel = require("../Model/paystackModel");
const paystackAPIs = require("../paystackAPIs");

class PaystackController {
  purchaseProduct = async (req, res) => {
    const { orderId, productName, amount, email, callbackUrl, name } = req.body;

    //validating payment information
    if (![orderId, productName, amount, email, callbackUrl, name]) {
      return res.status(400).json("Unable to validate information");
    }

    const paymentDetails = {
      amount,
      email,
      callback_url: callbackUrl,
      metadata: { amount, email, name },
    };

    const data = await paystackAPIs.initializePayment(paymentDetails);

    return res.status(201).send({
      message: "Payment initialized successfully",
      data,
    });
  };
}

module.exports = new PaystackController();
