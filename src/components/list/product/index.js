import Link from 'next/link'
import ImageLoader from '~/components/imageLoader'
import styles from './index.module.scss'

function ProductItem({ data, ...args }) {
    const href =
        '/shop/product/' + data.name.split(' ').join('-') + '/' + data.id

    return (
        <div className={styles.wrapper} {...args}>
            <Link href={href}>
                <ImageLoader
                    href={data.image}
                    alt={'Ảnh của sản phẩm ' + data.image}
                />
            </Link>
            <div className={styles.price}>
                {data.price}
                <sup> vnd</sup>
            </div>
            <Link href={href}>
                <div className={styles.name}>{data.name}</div>
            </Link>
            <div className={styles.description}>{data.description}</div>
            <button className={styles.action}>Thêm vào giỏ hàng</button>
        </div>
    )
}

export default ProductItem
