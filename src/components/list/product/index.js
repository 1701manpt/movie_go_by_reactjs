import Link from 'next/link'
import styles from './index.module.scss'

function ProductItem({ data, ...args }) {
    return (
        <div className={styles.wrapper} {...args}>
            <Link href={'/shop/product/' + data.id}>
                <div className={styles.image} style={{ backgroundImage: `url(${"https://cf.shopee.vn/file/a0eaa48841d4e8cc80870ae5e89ede92"})` }} alt="Ảnh danh mục" />
            </Link>
            <div className={styles.price}>{data.price}<sup> vnd</sup></div>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.description}>{data.description}</div>
            <button className={styles.action}>Thêm vào giỏ hàng</button>
        </div>
    )
}

export default ProductItem