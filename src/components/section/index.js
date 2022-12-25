import styles from './index.module.scss'

export const SectionTitle = ({ children, ...args }) => {
    return (
        <div className={styles.title} {...args}>
            {children}
        </div>
    )
}

export const SectionContent = ({ children }) => {
    return <div className={styles.content}>{children}</div>
}

function Section({ children, ...args }) {
    return (
        <section className={styles.wrapper} {...args}>
            {children}
        </section>
    )
}

export default Section
