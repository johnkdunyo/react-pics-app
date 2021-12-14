import axios from 'axios';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers :{
        Authorization : 'Client-ID QomTwslDZS9lLkFEOhucLQ4bt5f8-6vLuYg4g6uo6Oo'
      }
});


export default unsplash;