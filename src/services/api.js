import axios from 'axios';

const apiDevBurger = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001'
})


api.interceptors.request.use( (config) => {

    const userData = localStorage.getItem('devburguer:userData');

    const token = userData && JSON.parse(userData).token;

    config.headers.Authorization = `Bearer ${token}`;
    
    return config;
})
