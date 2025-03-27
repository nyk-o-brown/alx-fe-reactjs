// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https:/github.com/api',
});

export const getUsers = () => api.get('/users');
export const createUser = (userData) => api.post('/users', userData);