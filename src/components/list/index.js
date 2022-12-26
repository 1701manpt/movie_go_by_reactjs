import styles from './index.module.scss'

function List({ data, item: Item, styleOfItem, layoutSidebar, ...args }) {
    return (
        <div
            className={[
                styles.wrapper,
                layoutSidebar && styles.hasSidebar,
            ].join(' ')}
            {...args}
        >
            {data?.map((item, index) => {
                return <Item key={index} data={item} style={styleOfItem} />
            })}
        </div>
    )
}

export default List
