import { useRouter } from 'next/router'

import Login from '../../pages/shop/login';

import { useSelector } from 'react-redux';

function Authentication({ children }) {

    const router = useRouter()
    const user = useSelector((state) => state.auth.login.currentUser)

    if (!user) {
        router.push('/shop/login')
    }

    return (
        <>
            {
                user
                    ? children
                    : <Login />
            }
        </>
    )
}

export default Authentication;