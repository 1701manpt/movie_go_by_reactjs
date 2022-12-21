import Link from 'next/link'
import styles from './index.module.scss'

function CategoryItem({ data, active }) {

    const path = '/shop/product' + '?' + 'category=' + data.id

    return (
        <Link className={
            [
                styles.wrapper,
                active && styles.active || ''
            ].join(' ')}
            href={path}
        >
            <div className={styles.image} style={{ backgroundImage: `url(${"https://cf.shopee.vn/file/a0eaa48841d4e8cc80870ae5e89ede92"})` }} alt="Ảnh danh mục" />
            <div className={styles.name}>
                {data.name}
            </div>
        </Link>
    )
}

export default CategoryItem
