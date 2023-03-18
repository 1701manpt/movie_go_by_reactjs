import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAlert } from '~/redux/slices/ui'
import styles from './index.module.scss'

const Alert = ({
    children,
    position = ['right', 'bottom'],
    type = 'success',
}) => {
    const dispatch = useDispatch()
    const alertStatus = useSelector((state) => state.ui.alert.status)

    useEffect(() => {
        const timeoutHide = setTimeout(() => {
            dispatch(toggleAlert({ status: false }))
        }, 3000)

        return () => {
            clearTimeout(timeoutHide)
        }
    }, [dispatch, alertStatus])

    return (
        <>
            {alertStatus && (
                <div
                    className={[
                        styles.wrapper,
                        styles[position[0]],
                        styles[position[1]],
                        styles[type],
                    ].join(' ')}
                >
                    {children}
                </div>
            )}
        </>
    )
}

export default Alert
