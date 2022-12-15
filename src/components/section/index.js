import styles from './index.module.scss'

export const SectionTitle = ({ children }) => {
    return (
        <div className={styles.title}>
            {children}
        </div>
    )
}

export const SectionContent = ({ children }) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}

function Section({ children }) {
    return (
        <section className={styles.wrapper}>
            {children}
        </section>
    )
}

export default Section