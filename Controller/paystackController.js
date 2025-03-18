const paystackModel = require("../Model/paystackModel");

const purchaseProduct = async (req, res) => {
  const { orderId, productName, amountPaid, email } = req.body;

  //validating payment information
  if (![orderId, productName, amountPaid, email]) {
    return res.status(400).json("Unable to validate information");
  }

  const paymentDetails = {
    orderId,
    productName,
    amountPaid,
    email,
    paymentReference,
  };
};

module.exports = { purchaseProduct };
