import axios, { AxiosInstance } from 'axios';
import cookie from 'react-cookies';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api-localiza.azurewebsites.net/api',
  headers: {
    Authorization: cookie.load('localiza-auth') || '',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Content-Type': 'application/json',
  },
});

export { api };
