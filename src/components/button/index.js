import styles from './index.module.scss'

function Button({ children, fill = false, ...args }) {
    return (
        <button className={[
            styles.wrapper,
            fill && styles.fill,
        ].join(' ')} {...args}>
            {children}
        </button>
    )
}

export default Button
