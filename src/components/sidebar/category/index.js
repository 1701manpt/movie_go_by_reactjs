import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// styles
import styles from './index.module.scss'

function CategoryItem({ data }) {
    const router = useRouter()

    const path = '/shop/product' + '?' + 'category=' + data.id

    return (
        <Link
            className={[
                styles.wrapper,
                (router.asPath === path && styles.active) || '',
            ].join(' ')}
            href={path}
        >
            <div className={styles.image}>
                <Image
                    loader={data.image && (() => data.image)}
                    src='/image-view-default.png'
                    alt={'Ảnh của danh mục ' + data.image}
                    fill={true}
                />
            </div>
            <div className={styles.name}>{data.name}</div>
        </Link>
    )
}

export default CategoryItem
