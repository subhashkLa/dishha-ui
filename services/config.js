import axios from "axios";
import { create } from "apisauce";

const customAxiosInstance = axios.create({
  baseURL: "http://65.2.30.35/api/",
  // baseURL: "http://localhost:3000/api/",
});

const client = create({ axiosInstance: customAxiosInstance });

export default { client };
