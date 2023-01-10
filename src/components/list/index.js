import styles from './index.module.scss'

function List({ data, item: Item, styleOfItem, layoutSidebar, column = 6, ...args }) {
    return (
        <div
            className={[
                styles.wrapper,
                layoutSidebar && styles.hasSidebar,
                styles['column-' + column]
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
