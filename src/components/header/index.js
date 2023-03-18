import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

// redux
import { useSelector } from 'react-redux'

// components
import IconImage from '~/components/iconImage'
import { useState } from 'react'

function Header() {
    const user = useSelector((state) => state.auth.login.currentUser)

    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <Link href='/shop'>
                    <div className={[styles.imageLogo].join(' ')}>
                        <Image
                            src='/icon-shop.png'
                            alt='Store Online Logo'
                            fill={true}
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw'
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
            </div>
            <div className={styles.right}>
                <Link className={styles.iconContainer} href='/shop/cart'>
                    <IconImage src='/icon-cart.png' />
                </Link>
                {user && !user?.roleId ? (
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
                <div
                    className={[styles.iconMenu, styles.iconContainer].join(
                        ' ',
                    )}
                    onClick={handleToggleMenu}
                >
                    <IconImage src='/icon-menu.png' />
                </div>
            </div>
            <div
                className={[styles.menu, toggleMenu && styles.active].join(' ')}
            >
                <Link className={styles.item} href='/shop/product'>
                    Danh sách sản phẩm
                </Link>
                <Link className={styles.item} href='/shop#gioithieu'>
                    Giới thiệu Store Online
                </Link>
            </div>
        </header>
    )
}

export default Header
