import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "https://vip-reseller.co.id/api",
});