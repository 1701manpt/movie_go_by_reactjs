import Header from '~/components/admin/header'
import Sidebar from '~/components/admin/sidebar'
import BasicItem, { SidebarData } from '~/components/sidebar/basic'

// styles
import styles from '../index.module.scss'

function OnlyHeaderLayout({ children }) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Header />
                <div className={[styles.content].join(' ')}>{children}</div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default OnlyHeaderLayout