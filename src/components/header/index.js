import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

// redux
import { useSelector } from 'react-redux'

function Header() {

    const user = useSelector((state) => state.auth.login.currentUser)

    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <Link href="/shop">
                    <Image src="/logo.png" alt="Store Online Logo" width={50} height={50} />
                </Link>
            </div>
            <div className={styles.navbar}>
                <Link className={styles.item} href="/shop/product">Danh sách sản phẩm</Link>
                <Link className={styles.item} href="/shop#gioithieu">Giới thiệu Store Online</Link>
                <Link className={styles.item} href="/shop#link1">Link 1</Link>
                <Link className={styles.item} href="/shop#link2">Link 2</Link>
            </div>
            <div className={styles.right}>
                <Link className={styles.iconContainer} href="/shop/cart">
                    <Image className={styles.icon} src="/icon-cart.png" alt="Store Online Logo" width={50} height={50} />
                </Link>
                {
                    user
                        ? (
                            <>
                                <Link className={styles.iconContainer} href="/shop/account">
                                    <Image className={styles.icon} src="/icon-account.png" alt="Store Online Logo" width={50} height={50} />
                                </Link>
                                <Link className={styles.iconContainer} href="/shop/logout">
                                    <Image className={styles.icon} src="/icon-logout.png" alt="Store Online Logo" width={50} height={50} />
                                </Link>
                            </>
                        )
                        : (
                            <Link className={styles.iconContainer} href="/shop/login">
                                <Image className={styles.icon} src="/icon-login.png" alt="Store Online Logo" width={50} height={50} />
                            </Link>
                        )
                }
            </div>
            <div className={styles.menu + ' ' + styles.iconContainer}>
                <Image className={styles.icon} src="/icon-menu.png" width={50} height={50} alt="Store Online Logo" />
            </div>
        </header>
    )
}

export default Header