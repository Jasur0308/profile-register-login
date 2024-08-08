import axios from "axios";

const apiInstance = axios.create ({
    baseURL: 'https://api.escuelajs.co/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 1000
})

apiInstance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("token")
        if(token) {
            request.headers.Authorization = `Bearer ${token}`
        }
        return request
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default apiInstance