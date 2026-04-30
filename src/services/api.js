import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@paulislanches:token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});