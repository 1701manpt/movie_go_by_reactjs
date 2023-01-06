import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '~/redux/slices/menu'
import styles from './index.module.scss'

export const SidebarData = [
    // {
    //     path: '/admin',
    //     name: 'Trang chủ',
    //     icon: '/icon-home.png',
    // },
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
    {
        path: '/admin/statistic',
        name: 'Thống kê',
        icon: '/icon-statistic.png',
    },
]

function Sidebar({ data, title, item: Item }) {

    const dispatch = useDispatch()
    const router = useRouter()
    const toggle = useSelector((state) => state.menu.toggleMenu)

    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className={[styles.wrapper, toggle && styles.active].join(' ')}>
            {title && <div className={styles.title}>{title}</div>}
            <aside className={styles.content}>
                {data &&
                    data.map((item, index) => {
                        return (
                            <Item
                                onClick={handleToggleMenu}
                                key={index}
                                data={item}
                                active={
                                    (
                                        router.pathname.includes(item.path) && true
                                    ) ||
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
