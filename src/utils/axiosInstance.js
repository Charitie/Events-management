import axios from 'axios';

const baseURL = 'https://fancy-events-api.herokuapp.com';

export const axiosInstance = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json', crossDomain: true },
});

axiosInstance.interceptors.request.use((config)=>{
  const accessToken = localStorage.getItem('fancyeventsJWT');
  if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
})
