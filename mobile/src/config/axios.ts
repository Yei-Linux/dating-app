import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://10.0.2.2:3001',
});
