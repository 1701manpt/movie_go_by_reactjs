import Image from 'next/image'
import styles from './index.module.scss'

function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.link}>
                <a
                    href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by{' '}
                    <div className={styles.logo}>
                        <Image
                            src='/vercel.svg'
                            alt='Vercel Logo'
                            width={72}
                            height={16}
                        />
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer
