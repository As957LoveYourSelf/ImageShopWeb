import axios from 'axios';

export function request(config) {
    const instance = axios.create({
        baseURL: "",
        timeout: 3000
    })
    instance.interceptors.request.use(config=>{
        return config;
    }, error =>{})

    instance.interceptors.response.use(res=>{
        return res.data ? res.data : res;
    },error => {

    })
}

