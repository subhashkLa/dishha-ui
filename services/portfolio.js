import apiConfig from "./config";

const getPortfolio = (type) => apiConfig.client.get(`documents?type=${type}`);

export default {
  getPortfolio,
};
