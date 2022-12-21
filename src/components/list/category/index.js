import Link from 'next/link'
import styles from './index.module.scss'
// import { headerCase } from 'change-case'

const CategoryItem = ({ data }) => {

    const href = '/shop/category/' + data.name.split(' ').join('-') + '/' + data.id

    return (
        <div className={styles.wrapper}>
            <Link href={href}>
                <div className={styles.image} style={{ backgroundImage: `url(${"https://cf.shopee.vn/file/a0eaa48841d4e8cc80870ae5e89ede92"})` }} alt="Ảnh danh mục" />
            </Link>
            <Link href={href}>
                <div className={styles.name}>
                    {data.name}
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem