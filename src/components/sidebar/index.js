import { useRouter } from 'next/router'
import styles from './index.module.scss'

function Sidebar({ data, title, item: Item }) {

    const router = useRouter()

    return (
        <div className={styles.wrapper}>
            {
                title && <div className={styles.title}>{title}</div>
            }
            <aside className={styles.content}>
                {
                    data && data.map((item, index) => {
                        return (<Item key={index} data={item} active={(router.pathname === item.path) && true || false} />)
                    })
                }
            </aside>
        </div>
    )
}

export default Sidebar