import axios from 'axios';

const baseURL = 'http://localhost:5001';

export const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json', crossDomain: true },
});

