import Image from 'next/image'
import { useEffect, useState } from 'react'
import IconImage from '~/components/iconImage'
import styles from './index.module.scss'

export const fieldProduct = ['Id', 'Ảnh đại diện', 'Tên sản phẩm', 'Giá bán']
export const fieldUser = ['Id', 'Tài khoản', 'Quyền', 'Trạng thái', 'Ngày tạo']
export const fieldCategory = ['Id', 'Ảnh đại diện', 'Tên danh mục']

export const ProductItem = ({ data: product, index }) => {
    const [highLight, setHighLight] = useState(false)

    useEffect(() => {
        if (index % 2 == 0) {
            setHighLight(true)
        }
    }, [])

    return (
        <Row key={index} highlight={highLight}>
            <Cell center action><input type='checkbox' /></Cell>
            <Cell bold center>{index + 1}</Cell>
            <Cell center>{product.id}</Cell>
            <Cell center>
                {product.avatar
                    ? <div className={styles.image}>
                        <Image
                            loader={() => product.avatar}
                            src='/image-view-default.png'
                            alt={product.name}
                            fill={true}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    : 'Không có ảnh'
                }
            </Cell>
            <Cell minWidth maxWidth><div className={styles.eclipse}>{product.name}</div></Cell>
            <Cell>{product.price}<sup>đ</sup></Cell>
            <Cell center action><IconImage src='/icon-delete.png' /></Cell>
            <Cell center action><IconImage src='/icon-detail.png' /></Cell>
        </Row>
    )
}

export const CategoryItem = ({ data, index }) => {
    const [highLight, setHighLight] = useState(false)

    useEffect(() => {
        if (index % 2 == 0) {
            setHighLight(true)
        }
    }, [])

    return (
        <Row key={index} highlight={highLight}>
            <Cell center action><input type='checkbox' /></Cell>
            <Cell bold center>{index + 1}</Cell>
            <Cell center>{data.id}</Cell>
            <Cell center>
                {data.image
                    ? <div className={styles.image}>
                        <Image
                            loader={() => data.image}
                            src='/image-view-default.png'
                            alt={data.name}
                            fill={true}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    : 'Không có ảnh'
                }
            </Cell>
            <Cell minWidth maxWidth><div className={styles.eclipse}>{data.name}</div></Cell>
            {/* <Cell center><b>{1}</b> sản phẩm</Cell> */}
            <Cell center action><IconImage src='/icon-delete.png' /></Cell>
            <Cell center action><IconImage src='/icon-detail.png' /></Cell>
        </Row>
    )
}

export const TableHeader = ({ data }) => {
    return (
        <thead className={styles.header}>
            <Row>
                <Cell action></Cell>
                <Cell action>#</Cell>
                {data.map((item, i) => {
                    return (
                        <Cell key={i}>{item}</Cell>
                    )
                })}
                <Cell action></Cell>
                <Cell action></Cell>
            </Row>
        </thead >
    )
}

export const TableBody = ({ children }) => {
    return (
        <tbody className={styles.body}>
            {children}
        </tbody>
    )
}

export const Cell = ({ children, bold, center, action, maxWidth, minWidth, ...args }) => {
    return (
        <td className={[
            styles.cell,
            bold && styles.bold,
            center && styles.center,
            maxWidth && styles.maxWidth,
            minWidth && styles.minWidth,
            action && styles.action,
        ].join(' ')} {...args}>{children}</td>
    )
}

export const Row = ({ children, highlight }) => {
    return (
        <tr className={[
            styles.row,
            highlight && styles.highlight,
        ].join(' ')}>{children}</tr>
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
