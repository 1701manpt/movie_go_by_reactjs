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

// axiosPrivate.interceptors.request.use(
//     config => {
//         if (!config.headers['token']) {
//             config.headers['token'] = `Bearer ${auth.token}`
//         }

//         return config
//     },
//     error => Promise.reject(error)
// )

// axiosPrivate.interceptors.response.use(
//     response => response,
//     async (error) => {
//         const prevRequest = error?.config
//         if (error?.response?.status === 401 && !prevRequest?.sent) {
//             prevRequest.sent = true

//             console.log('Refreshing token...');

//             const refresh = useRefreshToken()
//             refresh()
//             const user = auth()

//             prevRequest.headers['token'] = `Bearer ${user.token}`

//             return axiosPrivate(prevRequest)
//         }

//         return Promise.reject(error)
//     }
// )

export { axiosPrivate }
export default axios
