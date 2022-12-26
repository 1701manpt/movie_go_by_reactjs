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
            />
        </div>
    )
}

export default ImageLoader
