import Footer from '../../components/footer'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

import styles from '../index.module.scss'
import styles1 from './index.module.scss'

function SidebarLayout({ children, title, data, item }) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Header />
                <div className={styles1.main}>
                    <Sidebar title={title} data={data} item={item} />
                    <div className={styles.main}>{children}</div>
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default SidebarLayout
