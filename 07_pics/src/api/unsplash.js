import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID Hwd5Fh8GY5uNkZNZM2xgm4yOKW28gD8QKKQfuexl4ZE'
    }
});
