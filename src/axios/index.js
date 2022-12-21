import axios from 'axios'

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.post['Content-Type'] = 'application/json'

export const axiosPrivate = axios.create({
    baseURL: 'http://localhost:7000/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
})

export default axios.create({
    baseURL: 'http://localhost:7000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})