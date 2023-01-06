import { useRouter } from 'next/router'

import Login from '~/pages/shop/login'

import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function Authentication({ children }) {
    const router = useRouter()
    const user = useSelector((state) => state.auth.login.currentUser)

    useEffect(() => {
        if (!user || user?.roleId) {
            router.push('/shop/login')
        }
    }, [user, router])

    return <>{user && !user?.roleId ? children : <Login />}</>
}

export default Authentication
