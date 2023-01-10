import styles from './index.module.scss'
import Image from 'next/image'

const ImageLoader = ({ href, alt }) => {
    return (
        <div className={styles.wrapper}>
            <Image
                className={styles.image}
                loader={href && (() => href)}
                alt={alt}
                src='/image-view-default.png'
                fill={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
        </div>
    )
}

export default ImageLoader
