import http from 'axios'

const axios = http.create({
    baseURL: 'http://localhost:7000/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

const axiosPrivate = http.create({
    baseURL: 'http://localhost:7000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

export { axiosPrivate }
export default axios
