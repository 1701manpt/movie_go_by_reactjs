import axios, { axiosPrivate } from "../axios"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useAxiosPrivate = () => {

    const user = useSelector((state) => state.auth.login.currentUser)

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

    useEffect(() => {

        const requestInterceptor = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['token']) {
                    config.headers['token'] = `Bearer ${user.accessToken}`
                }

                return config
            }, (error) => Promise.reject(error)
        )

        const responseInterceptor = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config
                if (error?.response?.status === 400 && !prevRequest?.sent) {
                    prevRequest.sent = true
                    const requestRefresh = await refreshToken()
                    console.log(requestRefresh)
                    prevRequest.headers['token'] = `Bearer ${requestRefresh.accessToken}`
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        )

        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor)
            axiosPrivate.interceptors.response.eject(responseInterceptor)
        }
    }, [user, refreshToken])

    return axiosPrivate
}

export default useAxiosPrivate