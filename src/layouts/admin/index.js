import Header from '~/components/admin/header'
import Sidebar, { SidebarData } from '~/components/admin/sidebar'
import BasicItem from '~/components/sidebar/basic'

// styles
import styles from './index.module.scss'

function AdminLayout({ children }) {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Header />
                <div className={styles.main}>
                    <Sidebar data={SidebarData} item={BasicItem} />
                    <div className={[styles.content].join(' ')}>{children}</div>
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default AdminLayout