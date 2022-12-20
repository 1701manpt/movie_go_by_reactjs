
import axios, { axiosPrivate } from "../config/axios"
import jwtDecode from "jwt-decode"
import { reLogin } from "../redux/slices/auth";
import { useSelector } from "react-redux";

const user = useSelector((state) => state.auth.login.currentUser)

axiosPrivate.interceptors.request.use(async function (config) {
    // Do something before request is sent
    const decodeToken = jwtDecode(user.accessToken)
    if (decodeToken.exp < (new Date()).getTime() / 1000) {
        const refreshToken = async () => {
            try {
                const res = await axios({
                    method: 'POST',
                    url: '/auth/refresh',
                    withCredentials: true
                })

                return res.data
            } catch (error) {
                return error.response.data
            }
        }

        const data = await refreshToken()

        const refreshUser = {
            ...user,
            accessToken: data.accessToken
        }

        dispatch(reLogin(refreshUser))
        config.headers['token'] = "Bearer" + data.accessToken
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosPrivate