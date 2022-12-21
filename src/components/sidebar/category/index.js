import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './index.module.scss'

function CategoryItem({ data }) {

    const router = useRouter()

    const path = '/shop/product' + '?' + 'category=' + data.id

    return (
        <Link className={
            [
                styles.wrapper,
                router.asPath === path && styles.active || ''
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
