import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
  }
});

export const getUsers = () => api.get('/search/users');
export const createUser = (userData) => api.post('/users', userData);