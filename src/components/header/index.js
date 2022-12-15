import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

function Header() {
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
            </div>
            <div className={styles.right}>
                <Link href="/shop/login" className={styles.login}>
                    <Image src="/icon-login.png" alt="Store Online Logo" width={30} height={30} />
                </Link>
            </div>
        </header>
    )
}

export default Header