import styles from './index.module.scss'

const CategoryItem = ({ data }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image} style={{ backgroundImage: `url(${"https://cf.shopee.vn/file/a0eaa48841d4e8cc80870ae5e89ede92"})` }} alt="Ảnh danh mục" />
            <div className={styles.name}>
                Danh mục tui tự làm ra để kiểm tra chất lượng của css có tốt hong thui {data}
            </div>
        </div>
    )
}

export default CategoryItem