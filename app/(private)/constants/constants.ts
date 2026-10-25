import axios from 'axios';

export const posterBaseUrl = 'https://image.tmdb.org/t/p/w500'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
});
