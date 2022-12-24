import { useSelector } from "react-redux"

const auth = () => {
    const user = useSelector((state) => state.auth.login.currentUser)
    return user
}

export default auth