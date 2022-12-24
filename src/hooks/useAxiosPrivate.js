import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosPrivate } from "../axios";
import { refreshToken } from "../redux/callApi/auth";

const useAxiosPrivate = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.login.currentUser)
    const loading = useSelector((state) => state.auth.refresh.loading)

    console.log(user, loading);

    useEffect(() => {

        const requestInterCept = axiosPrivate.interceptors.request.use(
            config => {
                console.log('Requesting..., Token: ', config.headers['token']);
                if (!config.headers['token']) {
                    console.log(user.token);
                    config.headers['token'] = `Bearer ${user.token}`
                }

                return config
            },
            async (error) => Promise.reject(error)
        )

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => {
                console.log('200 => Sending request...');
                return response
            },
            async (error) => {
                const prevRequest = error?.config
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true

                    console.log('401 => Refreshing token...');

                    dispatch(refreshToken())

                    if (user.token != prevRequest.headers['token']) {
                        prevRequest.headers['token'] = `Bearer ${user.token}`
                    }

                    return axiosPrivate(prevRequest)
                }

                return Promise.reject(error)
            }
        )

        return () => {
            axiosPrivate.interceptors.request.eject(requestInterCept)
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }
    }, [user])

    return axiosPrivate
}

export default useAxiosPrivate