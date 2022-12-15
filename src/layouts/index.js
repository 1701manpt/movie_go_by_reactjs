import Footer from '../components/footer'
import Header from '../components/header'
import styles from './index.module.scss'

function Layout({ children }) {

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout