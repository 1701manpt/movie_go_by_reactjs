import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import IconImage from '~/components/iconImage'
import { toggleMenu } from '~/redux/slices/ui'
import styles from './index.module.scss'

// redux

// components

function Header() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.login.currentUser)

    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <Link href='/admin'>
                    <div className={[styles.imageLogo].join(' ')}>
                        <Image
                            src='/icon-admin.png'
                            alt='Store Online Logo'
                            fill={true}
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw'
                        />
                    </div>
                </Link>
            </div>
            <div></div>
            <div className={styles.right}>
                {user && user?.roleId ? (
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
                        <div
                            className={[styles.menu, styles.iconContainer].join(
                                ' ',
                            )}
                            onClick={handleToggleMenu}
                        >
                            <IconImage src='/icon-menu.png' />
                        </div>
                    </>
                ) : (
                    <Link className={styles.iconContainer} href='/admin/login'>
                        <IconImage src='/icon-login.png' />
                    </Link>
                )}
            </div>
        </header>
    )
}

export default Header
