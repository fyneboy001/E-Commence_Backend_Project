const axios = require("axios");
const config = require("./config");

class PaystackApi {
  constructor() {
    this.baseUrl = config.paystackUrl;
    this.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.paystackSecret}`,
    };
  }

  async initializePayment(paymentDetails) {
    const response = await axios.post(
      `${this.baseUrl}/transaction/initialize`,
      paymentDetails,
      { headers: this.headers }
    );
    return response.data.data;
  }

  async verifyPayment(paymentReference) {
    const response = await axios.get(
      `${this.baseUrl}/transaction/verify/${paymentReference}`,
      { headers: this.headers }
    );
    return response.data;
  }
}

module.exports = new PaystackApi();
