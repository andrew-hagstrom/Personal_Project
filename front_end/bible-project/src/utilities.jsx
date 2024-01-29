import axios from "axios";


export const api = axios.create({
    baseURL: 'http://morph-master.com/api/v1/',
    // baseURL: 'http://127.0.0.1:8000/api/v1/'
});
