import Image from 'next/image'
import styles from './index.module.scss'

const IconImage = ({
    src = '/image-view-default.png',
    href,
    alt = 'icon',
    children,
    ...args
}) => {
    return (
        <div className={[styles.wrapper].join(' ')}>
            <Image
                className={styles.icon}
                loader={href && (() => href)}
                src={src}
                alt={alt}
                fill={true}
            />
        </div>
    )
}

export default IconImage
