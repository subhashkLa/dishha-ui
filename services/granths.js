import apiConfig from "./config";

const getGrants = (query) => apiConfig.client.get(`granths${query}`);

export default {
  getGrants,
};
