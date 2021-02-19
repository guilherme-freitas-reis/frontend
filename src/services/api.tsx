import axios, { AxiosInstance } from 'axios';
import { obterToken } from '../utils/crypto';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api-localiza.azurewebsites.net/api',
  headers: {
    Authorization: obterToken() || '',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Content-Type': 'application/json',
  },
});

export { api };
