import styles from './index.module.scss'

function List({ data, item: Item, styleOfItem, ...args }) {
    return (
        <div className={styles.wrapper} {...args}>
            {data?.map((item, index) => {
                return <Item key={index} data={item} style={styleOfItem} />
            })}
        </div>
    )
}

export default List
