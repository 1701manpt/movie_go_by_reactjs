import styles from './index.module.scss'

function List({ data, item: Item }) {
    return (
        <div className={styles.wrapper}>
            {
                data.map((item, index) => {
                    return (<Item key={index} data={item} />)
                })
            }
        </div>
    )
}

export default List