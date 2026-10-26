import axios from 'axios';


const movieApiUrl = 'https://api.themoviedb.org/3'
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjI3MGE4NTNkY2NlMjY0NTA1NTdkZTMwYzQ5ZGMzZSIsIm5iZiI6MTc4MTY5MDgwMS40Njg5OTk5LCJzdWIiOiI2YTMyNzFiMWQxYTBjYWQ2ZmIzZTlkNmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4fhepyvvbwkpYquPa2a8XIEHh4UM3BZq-pBWtT61O3E'

export const axiosInstance = axios.create({
    baseURL: movieApiUrl,
    headers: {Authorization: `Bearer ${accessToken}`},
});

export const posterBaseUrl = 'https://image.tmdb.org/t/p/w500'
