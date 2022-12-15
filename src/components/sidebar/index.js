import styles from './index.module.scss'

function Sidebar({ data, title, item: Item }) {

    return (
        <div className={styles.wrapper}>
            {
                title && <div className={styles.title}>{title}</div>
            }
            <aside className={styles.content}>
                {
                    data.map((item, index) => {
                        return (<Item key={index} data={item} />)
                    })
                }
            </aside>
        </div>
    )
}

export default Sidebar