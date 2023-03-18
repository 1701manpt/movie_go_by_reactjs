import { useEffect, useState } from 'react'
import styles from './index.module.scss'

function Input({ label, error = [], name, ...args }) {
    // làm như này hiệu suất kém
    let message
    error instanceof Array &&
        error?.forEach((e, i) => {
            if (e.param === name) {
                message = e.msg
            }
        })

    return (
        <div className={styles.wrapper}>
            {label && (
                <label className={styles.label} htmlFor={name}>
                    {label}
                </label>
            )}
            <input className={styles.input} id={name} name={name} {...args} />
            <div className={styles.error}>{message}</div>
        </div>
    )
}

export default Input
