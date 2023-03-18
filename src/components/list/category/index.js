import Image from 'next/image'
import Link from 'next/link'
import ImageLoader from '~/components/imageLoader'
import styles from './index.module.scss'

const CategoryItem = ( { data, ...args } ) =>
{
    const href =
        '/shop/category/' + data.name.split( ' ' ).join( '-' ) + '/' + data.id

    return (
        <div className={ styles.wrapper } { ...args }>
            <Link href={ href }>
                {/* <ImageLoader
                    href={ data.image }
                    alt={ 'Ảnh của danh mục ' + data.name }
                /> */}

                <div className={ styles.image }>
                    <Image
                        loader={ data.image && ( () => data.image ) }
                        src='/image-view-default.png'
                        alt={ 'Ảnh của danh mục ' + data.name }
                        fill={ true }
                    />
                </div>
            </Link>
            <Link href={ href }>
                <div className={ styles.name }>{ data.name }</div>
            </Link>
        </div>
    )
}

export default CategoryItem
