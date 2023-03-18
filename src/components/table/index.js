import moment from 'moment'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import IconImage from '~/components/iconImage'
import styles from './index.module.scss'

export const fieldProduct = [
    'Id',
    'Ảnh đại diện',
    'Tên sản phẩm',
    'Giá bán',
    'Danh mục',
]
export const fieldUser = ['Id', 'Tài khoản', 'Email', 'Trạng thái', 'Ngày tạo']
export const fieldCategory = ['Id', 'Ảnh đại diện', 'Tên danh mục']
export const fieldEmployee = [
    'Id',
    'Họ và tên',
    'Số điện thoại',
    'Địa chỉ',
    'Chức vụ',
    'Tài khoản',
]
export const fieldCustomer = [
    'Id',
    'Họ và tên',
    'Số điện thoại',
    'Địa chỉ',
    'Tài khoản',
]

export const ProductItem = ({ data: product, index }) => {
    const [highLight, setHighLight] = useState(false)

    useEffect(() => {
        if (index % 2 == 0) {
            setHighLight(true)
        }
    }, [index])

    return (
        <Row key={index} highlight={highLight}>
            <Cell center action>
                <input type='checkbox' />
            </Cell>
            <Cell bold center>
                {index + 1}
            </Cell>
            <Cell center>{product.id}</Cell>
            <Cell center>
                {product.avatar ? (
                    <div className={styles.image}>
                        <Image
                            loader={() => product.avatar}
                            src='/image-view-default.png'
                            alt={product.name}
                            fill={true}
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw'
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                ) : (
                    'Không có ảnh'
                )}
            </Cell>
            <Cell minWidth maxWidth>
                <div className={styles.eclipse}>{product.name}</div>
            </Cell>
            <Cell>
                {product.price}
                <sup>đ</sup>
            </Cell>
            <Cell center action>
                {product.category?.name}
            </Cell>
            <Cell center action>
                <IconImage src='/icon-delete.png' />
            </Cell>
            <Cell center action>
                <IconImage src='/icon-detail.png' />
            </Cell>
        </Row>
    )
}

export const CategoryItem = ({ data, index }) => {
    const [highLight, setHighLight] = useState(false)

    useEffect(() => {
        if (index % 2 == 0) {
            setHighLight(true)
        }
    }, [index])

    return (
        <Row key={index} highlight={highLight}>
            <Cell center action>
                <input type='checkbox' />
            </Cell>
            <Cell bold center>
                {index + 1}
            </Cell>
            <Cell center>{data.id}</Cell>
            <Cell center>
                {data.image ? (
                    <div className={styles.image}>
                        <Image
                            loader={() => data.image}
                            src='/image-view-default.png'
                            alt={data.name}
                            fill={true}
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw'
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                ) : (
                    'Không có ảnh'
                )}
            </Cell>
            <Cell minWidth maxWidth>
                <div className={styles.eclipse}>{data.name}</div>
            </Cell>
            {/* <Cell center><b>{1}</b> sản phẩm</Cell> */}
            <Cell center action>
                <IconImage src='/icon-delete.png' />
            </Cell>
            <Cell center action>
                <IconImage src='/icon-detail.png' />
            </Cell>
        </Row>
    )
}

export const EmployeeItem = ({ data, index }) => {
    const [highLight, setHighLight] = useState(false)

    useEffect(() => {
        if (index % 2 == 0) {
            setHighLight(true)
        }
    }, [index])

    return (
        <Row key={index} highlight={highLight}>
            <Cell center action>
                <input type='checkbox' />
            </Cell>
            <Cell bold center>
                {index + 1}
            </Cell>
            <Cell center>{data.id}</Cell>
            <Cell center>{data.fullName}</Cell>
            <Cell center>{data.phone}</Cell>
            <Cell center>{data.address}</Cell>
            <Cell center>{data.role.name}</Cell>
            <Cell center>{data.user.account}</Cell>
            <Cell center action>
                <IconImage src='/icon-delete.png' />
            </Cell>
            <Cell center action>
                <IconImage src='/icon-detail.png' />
            </Cell>
        </Row>
    )
}

export const CustomerItem = ({ data, index }) => {
    const [highLight, setHighLight] = useState(false)

    useEffect(() => {
        if (index % 2 == 0) {
            setHighLight(true)
        }
    }, [index])

    return (
        <Row key={index} highlight={highLight}>
            <Cell center action>
                <input type='checkbox' />
            </Cell>
            <Cell bold center>
                {index + 1}
            </Cell>
            <Cell center>{data.id}</Cell>
            <Cell center>{data.fullName}</Cell>
            <Cell center>{data.phone}</Cell>
            <Cell center>{data.address}</Cell>
            <Cell center>{data.user.account}</Cell>
            <Cell center action>
                <IconImage src='/icon-delete.png' />
            </Cell>
            <Cell center action>
                <IconImage src='/icon-detail.png' />
            </Cell>
        </Row>
    )
}

export const UserItem = ({ data, index }) => {
    const [highLight, setHighLight] = useState(false)

    useEffect(() => {
        if (index % 2 == 0) {
            setHighLight(true)
        }
    }, [index])

    return (
        <Row key={index} highlight={highLight}>
            <Cell center action>
                <input type='checkbox' />
            </Cell>
            <Cell bold center>
                {index + 1}
            </Cell>
            <Cell center>{data.id}</Cell>
            <Cell center>{data.account}</Cell>
            <Cell center>{data.email}</Cell>
            <Cell center>{data.userStatus.name}</Cell>
            <Cell center>
                {moment(data.createdAt).format('DD-MM-YYYY HH:mm')}
            </Cell>
            <Cell center action>
                <IconImage src='/icon-delete.png' />
            </Cell>
            <Cell center action>
                <IconImage src='/icon-detail.png' />
            </Cell>
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
                    return <Cell key={i}>{item}</Cell>
                })}
                <Cell action></Cell>
                <Cell action></Cell>
            </Row>
        </thead>
    )
}

export const TableBody = ({ children }) => {
    return <tbody className={styles.body}>{children}</tbody>
}

export const Cell = ({
    children,
    bold,
    center,
    action,
    maxWidth,
    minWidth,
    ...args
}) => {
    return (
        <td
            className={[
                styles.cell,
                bold && styles.bold,
                center && styles.center,
                maxWidth && styles.maxWidth,
                minWidth && styles.minWidth,
                action && styles.action,
            ].join(' ')}
            {...args}
        >
            {children}
        </td>
    )
}

export const Row = ({ children, highlight }) => {
    return (
        <tr className={[styles.row, highlight && styles.highlight].join(' ')}>
            {children}
        </tr>
    )
}

const Table = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>{children}</table>
        </div>
    )
}

export default Table
