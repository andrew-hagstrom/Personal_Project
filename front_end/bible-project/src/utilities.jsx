import axios from "axios";


export const api = axios.create({
    baseURL: 'https://18.119.29.248/api'
    
    // "http://127.0.0.1:8000/api/",
});

// const ROUTES = {
//     user: "user"
// }

// api.get(${ROUTES.user/login})

export const userapi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/users",
});
