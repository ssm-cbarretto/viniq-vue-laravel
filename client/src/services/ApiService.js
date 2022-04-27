import axios from "axios";

const ApiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

ApiService.defaults.withCredentials = true;
ApiService.defaults.headers['Accept'] = 'application/json';

export default ApiService;