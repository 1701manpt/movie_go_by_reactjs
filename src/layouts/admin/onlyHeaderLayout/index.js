import Header from '~/components/admin/header'

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
