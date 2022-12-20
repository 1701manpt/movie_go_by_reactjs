import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Authentication from '../../../components/authentication'
import BasicItem, { SidebarData } from '../../../components/sidebar/basic';
import SidebarLayout from '../../../layouts/sidebarLayout';
import { getById } from '../../../redux/callApi/customer';

function Account() {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.auth.login.currentUser)
    const myAccount = useSelector((state) => state.customer.myAccount?.user)

    useEffect(() => {
        dispatch(getById(user))
    }, [user])

    return (
        <Authentication>
            <Head>
                <title>Tài khoản | Store Online</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/page-account.png" />
            </Head>
            <SidebarLayout data={SidebarData} item={BasicItem}>
                <div>
                    <table style={{ border: '1px solid black' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid black' }}>Mã khách hàng</th>
                                <th style={{ border: '1px solid black' }}>Tài khoản</th>
                                <th style={{ border: '1px solid black' }}>Tên khách hàng</th>
                                <th style={{ border: '1px solid black' }}>Email</th>
                                <th style={{ border: '1px solid black' }}>Số điện thoại</th>
                                <th style={{ border: '1px solid black' }}>Địa chỉ</th>
                                <th style={{ border: '1px solid black' }}>Trạng thái tài khoản</th>
                                <th style={{ border: '1px solid black' }}>Ngày tạo</th>
                                <th style={{ border: '1px solid black' }}>Ngày cập nhật cuối</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myAccount && (
                                    <tr>
                                        <td style={{ border: '1px solid black' }}>{myAccount.id}</td>
                                        <td style={{ border: '1px solid black' }}>{myAccount.account}</td>
                                        <td style={{ border: '1px solid black' }}>{myAccount.fullName}</td>
                                        <td style={{ border: '1px solid black' }}>{myAccount.email}</td>
                                        <td style={{ border: '1px solid black' }}>{myAccount.phone}</td>
                                        <td style={{ border: '1px solid black' }}>{myAccount.address}</td>
                                        <td style={{ border: '1px solid black' }}>{myAccount.accountStatus.name}</td>
                                        <td style={{ border: '1px solid black' }}>{myAccount.createdAt}</td>
                                        <td style={{ border: '1px solid black' }}>{myAccount.updatedAt}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </SidebarLayout>
        </Authentication>
    )
}

export default Account;