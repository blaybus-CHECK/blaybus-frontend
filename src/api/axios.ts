import axios from 'axios';

const APPLICATION_KEY = import.meta.env.VITE_API_URL;
const DOMAIN = "/api";

const api = axios.create({
  baseURL: APPLICATION_KEY+DOMAIN, // .env에서 가져옴
  timeout: 5000,
 
});

export default api;