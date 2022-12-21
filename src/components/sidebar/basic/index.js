import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

export const SidebarData = [
    {
        path: '/shop/account',
        name: 'Thông tin cá nhân',
        icon: '/icon-info.png'
    },
    {
        path: '/shop/order',
        name: 'Theo dõi đơn hàng',
        icon: '/icon-order.png'
    },
]

function BasicItem({ data }) {
    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.image} style={{ backgroundImage: `url(${"https://cf.shopee.vn/file/a0eaa48841d4e8cc80870ae5e89ede92"})` }} alt="Ảnh danh mục" /> */}
            <Image className={styles.image} src={data.icon} width={50} height={50} alt="Ảnh danh mục" />
            <Link className={styles.name} href={data.path}>{data.name}</Link>
        </div>
    )
}

export default BasicItem
