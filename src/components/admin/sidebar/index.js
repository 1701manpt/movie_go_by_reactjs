import { useRouter } from 'next/router'
import styles from './index.module.scss'

export const SidebarData = [
    {
        path: '/admin',
        name: 'Trang chủ',
        icon: '/icon-home.png',
    },
    {
        path: '/admin/manage-user',
        name: 'Quản lý người dùng',
        icon: '/icon-manage-user.png',
    },
    {
        path: '/admin/manage-customer',
        name: 'Quản lý khách hàng',
        icon: '/icon-manage-customer.png',
    },
    {
        path: '/admin/manage-employee',
        name: 'Quản lý nhân viên',
        icon: '/icon-manage-employee.png',
    },
    {
        path: '/admin/manage-category',
        name: 'Quản lý danh mục',
        icon: '/icon-manage-category.png',
    },
    {
        path: '/admin/manage-product',
        name: 'Quản lý sản phẩm',
        icon: '/icon-manage-product.png',
    },
    {
        path: '/admin/manage-order',
        name: 'Quản lý đơn hàng',
        icon: '/icon-manage-order.png',
    },
]

function Sidebar({ data, title, item: Item }) {
    const router = useRouter()

    return (
        <div className={styles.wrapper}>
            {title && <div className={styles.title}>{title}</div>}
            <aside className={styles.content}>
                {data &&
                    data.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                data={item}
                                active={
                                    (router.pathname === item.path && true) ||
                                    false
                                }
                            />
                        )
                    })}
            </aside>
        </div>
    )
}

export default Sidebar
