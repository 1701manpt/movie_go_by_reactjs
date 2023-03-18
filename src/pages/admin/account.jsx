// reactjs

// nextjs
import moment from 'moment'
import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AccountSidebar } from '~/components/admin/sidebar'
import Authentication from '~/components/authentication/admin'
import Section, { SectionContent, SectionTitle } from '~/components/section'
import Table, { Cell, Row, TableBody } from '~/components/table'
import useAxiosPrivate from '~/hooks/useAxiosPrivate'
import Layout from '~/layouts/admin'
import { getById } from '~/redux/callApi/employee'

// components

// redux

export default function Admin() {
    const dispatch = useDispatch()
    const axiosPrivate = useAxiosPrivate()
    const personal = useSelector((state) => state.employee.personal.info)
    const loading = useSelector((state) => state.employee.personal.loading)
    const user = useSelector((state) => state.auth.login.currentUser)

    useEffect(() => {
        dispatch(getById({ user, axiosPrivate }))
    }, [dispatch, axiosPrivate, user])

    return (
        <Authentication>
            <Head>
                <title>Thông tin cá nhân | Store Online</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/icon-account.png' />
            </Head>
            <Layout data={AccountSidebar}>
                <Section>
                    <SectionTitle>Thông tin cá nhân</SectionTitle>
                    <SectionContent>
                        {loading ? (
                            <div>loading....</div>
                        ) : (
                            personal && (
                                <Table>
                                    <TableBody>
                                        <Row>
                                            <Cell bold>Họ và tên</Cell>
                                            <Cell>{personal.fullName}</Cell>
                                        </Row>
                                        <Row>
                                            <Cell bold>Địa chỉ</Cell>
                                            <Cell>{personal.address}</Cell>
                                        </Row>
                                        <Row>
                                            <Cell bold>Số điện thoại</Cell>
                                            <Cell>{personal.phone}</Cell>
                                        </Row>
                                        <Row>
                                            <Cell bold>Tên tài khoản</Cell>
                                            <Cell>{personal.user.account}</Cell>
                                        </Row>
                                        <Row>
                                            <Cell bold>Email</Cell>
                                            <Cell>{personal.user.email}</Cell>
                                        </Row>
                                        <Row>
                                            <Cell bold>Trạng thái người dùng</Cell>
                                            <Cell>
                                                {personal.user.userStatus.name}
                                            </Cell>
                                        </Row>
                                        <Row>
                                            <Cell bold>Chức vụ</Cell>
                                            <Cell>{personal.role.name}</Cell>
                                        </Row>
                                        <Row>
                                            <Cell bold>Ngày đăng ký</Cell>
                                            <Cell>
                                                {moment(
                                                    new Date(
                                                        personal.user.createdAt,
                                                    ),
                                                ).format('DD-MM-YYYY | HH:mm')}
                                            </Cell>
                                        </Row>
                                    </TableBody>
                                </Table>
                            )
                        )}
                    </SectionContent>
                </Section>
            </Layout>
        </Authentication>
    )
}
