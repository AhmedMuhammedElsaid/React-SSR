import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://react-ssr-api.herokuapp.com",
});
export default axiosInstance;
