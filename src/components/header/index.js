import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

// redux
import { useSelector } from 'react-redux'

// components
import IconImage from '~/components/iconImage'

function Header() {
    const user = useSelector((state) => state.auth.login.currentUser)

    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <Link href='/shop'>
                    <div className={[styles.imageLogo].join(' ')}>
                        <Image
                            src='/logo.png'
                            alt='Store Online Logo'
                            fill={true}
                        />
                    </div>
                </Link>
            </div>
            <div className={styles.navbar}>
                <Link className={styles.item} href='/shop/product'>
                    Danh sách sản phẩm
                </Link>
                <Link className={styles.item} href='/shop#gioithieu'>
                    Giới thiệu Store Online
                </Link>
                <Link className={styles.item} href='/shop#link1'>
                    Link 1
                </Link>
                <Link className={styles.item} href='/shop#link2'>
                    Link 2
                </Link>
            </div>
            <div className={styles.right}>
                <Link className={styles.iconContainer} href='/shop/cart'>
                    <IconImage src='/icon-cart.png' />
                </Link>
                {user ? (
                    <>
                        <Link
                            className={styles.iconContainer}
                            href='/shop/account'
                        >
                            <IconImage src='/icon-account.png' />
                        </Link>
                        <Link
                            className={styles.iconContainer}
                            href='/shop/logout'
                        >
                            <IconImage src='/icon-logout.png' />
                        </Link>
                    </>
                ) : (
                    <Link className={styles.iconContainer} href='/shop/login'>
                        <IconImage src='/icon-login.png' />
                    </Link>
                )}
                <div className={[styles.menu, styles.iconContainer].join(' ')}>
                    <IconImage src='/icon-menu.png' />
                </div>
            </div>
        </header>
    )
}

export default Header
