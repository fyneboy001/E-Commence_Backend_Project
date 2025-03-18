const axios = require("axios");

class paystackApi {
  constructor() {
    this.baseUrl = config.paystackUrl;
    this.headers = {
      "Content-Type": "application/json",
      authorization: "Bearer ${config.paystackSecret}",
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

module.exports = new paystackApi();
