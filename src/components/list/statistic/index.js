import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

export const StatisticData = [
    {
        path: '/admin/manage-user',
        name: 'Người dùng',
        icon: '/icon-manage-user.png',
    },
    {
        path: '/admin/manage-customer',
        name: 'Khách hàng',
        icon: '/icon-manage-customer.png',
    },
    {
        path: '/admin/manage-employee',
        name: 'Nhân viên',
        icon: '/icon-manage-employee.png',
    },
    {
        path: '/admin/manage-category',
        name: 'Danh mục',
        icon: '/icon-manage-category.png',
    },
    {
        path: '/admin/manage-product',
        name: 'Sản phẩm',
        icon: '/icon-manage-product.png',
    },
    {
        path: '/admin/manage-order',
        name: 'Đơn hàng',
        icon: '/icon-manage-order.png',
    },
]

const StatisticItem = ({ data }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{data.name}</div>
            <Link href={data.path}>
                <Image src={data.icon} width={80} height={80} priority alt='icon' />
            </Link>
            <div className={styles.amount}>Số lượng: 100</div>
        </div>
    )
}

export default StatisticItem
