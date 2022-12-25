import styles from './index.module.scss'

function Button({ children, ...args }) {
    return (
        <button className={styles.wrapper} {...args}>
            {children}
        </button>
    )
}

export default Button
