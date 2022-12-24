import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { refreshToken } from "../redux/callApi/auth"

const useRefreshToken = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState()
    const current = useSelector((state) => state.auth.login.currentUser)
    const loading = useSelector((state) => state.auth.login.loading)

    useEffect(() => {
        dispatch(refreshToken())

        setUser(current)
    }, [current])

    return user
}

export default useRefreshToken
