import Header from '~/components/admin/header'
import Sidebar, { SidebarData } from '~/components/admin/sidebar'
import BasicItem from '~/components/sidebar/basic'

// styles
import styles from './index.module.scss'

function AdminLayout({
    children,
    title,
    data = SidebarData,
    item = BasicItem,
}) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Header />
                <div className={styles.main}>
                    <Sidebar title={title} data={data} item={item} />
                    <div className={[styles.content].join(' ')}>{children}</div>
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default AdminLayout
