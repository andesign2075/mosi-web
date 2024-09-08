import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';

  if (typeof window !== 'undefined') {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  }

  return config;
});

export default axiosInstance;
