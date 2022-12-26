import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import IconImage from '~/components/iconImage'
import styles from './index.module.scss'

// redux

// components

function Header() {

    const user = useSelector((state) => state.auth.login.currentUser)

    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <Link href='/admin'>
                    <div className={[styles.imageLogo].join(' ')}>
                        <Image
                            src='/logo-admin.png'
                            alt='Store Online Logo'
                            fill={true}
                        />
                    </div>
                </Link>
            </div>
            <div></div>
            <div className={styles.right}>
                {user ? (
                    <>
                        <Link
                            className={styles.iconContainer}
                            href='/admin/account'
                        >
                            <IconImage src='/icon-account.png' />
                        </Link>
                        <Link
                            className={styles.iconContainer}
                            href='/admin/logout'
                        >
                            <IconImage src='/icon-logout.png' />
                        </Link>
                    </>
                ) : (
                    <Link className={styles.iconContainer} href='/admin/login'>
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
