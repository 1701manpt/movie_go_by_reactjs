import styles from './index.module.scss'

export const FormTitle = ({ children }) => {
    return (
        <div className={styles.title}>{children}</div>
    )
}

export const FormContent = ({ children, error }) => {
    return (
        <div className={styles.content}>{children}</div>
    )
}

export const FormAction = ({ children }) => {
    return (
        <div className={styles.action}>{children}</div>
    )
}

function Form({ children }) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Form