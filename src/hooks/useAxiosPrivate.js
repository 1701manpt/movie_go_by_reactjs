import { useDispatch, useSelector } from 'react-redux'
import { axiosPrivate } from '~/axiosHttp'
import { refreshToken } from '~/redux/callApi/auth'

const useAxiosPrivate = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.login.currentUser)

    // useEffect(() => {

    const requestInterCept = axiosPrivate.interceptors.request.use(
        (config) => {
            if (!config.headers['token']) {
                config.headers['token'] = `Bearer ${user.token}`
            }

            return config
        },
        async (error) => Promise.reject(error),
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
        (response) => {
            return response
        },
        async (error) => {
            const prevRequest = error?.config
            if (error?.response?.status === 401 && !prevRequest?.sent) {
                prevRequest.sent = true

                dispatch(refreshToken())

                prevRequest.headers['token'] = `Bearer ${user.token}`

                return axiosPrivate(prevRequest)
            }

            return Promise.reject(error)
        },
    )

    // return () => {
    //     axiosPrivate.interceptors.request.eject(requestInterCept)
    //     axiosPrivate.interceptors.response.eject(responseIntercept)
    // }
    // }, [user])

    return axiosPrivate
}

export default useAxiosPrivate
