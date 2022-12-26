import Link from 'next/link'
import IconImage from '~/components/iconImage'

// styles
import styles from './index.module.scss'

export const SidebarData = [
    {
        path: '/shop/account',
        name: 'Thông tin cá nhân',
        icon: '/icon-info.png',
    },
    {
        path: '/shop/order',
        name: 'Theo dõi đơn hàng',
        icon: '/icon-order.png',
    },
]

function BasicItem({ data, active }) {
    return (
        <div
            className={[styles.wrapper, (active && styles.active) || ''].join(
                ' ',
            )}
        >
            <IconImage src={data.icon} />
            <Link className={styles.name} href={data.path}>
                {data.name}
            </Link>
        </div>
    )
}

export default BasicItem
