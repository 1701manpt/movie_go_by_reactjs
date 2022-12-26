import styles from './index.module.scss'

export const TableHeader = ({ children }) => {
    return (
        <thead className={styles.header}>
            {children}
        </thead>
    )
}

export const TableBody = ({ children }) => {
    return (
        <tbody className={styles.body}>
            {children}
        </tbody>
    )
}

const Table = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                {children}
            </table>
        </div>
    )
}

export default Table
