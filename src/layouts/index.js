import Footer from '~/components/footer'
import Header from '~/components/header'

// styles
import styles from './index.module.scss'

function Layout({ children }) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Header />
                <div className={styles.main}>{children}</div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
