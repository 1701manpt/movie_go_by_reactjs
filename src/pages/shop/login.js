// reactjs
import { useState } from 'react'

// nextjs
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// redux
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../slices/customer"

// layouts
import Layout from '../../layouts'

// components
import Form, { FormAction, FormContent, FormTitle } from '../../components/form'
import Input from '../../components/form/input'
import Button from '../../components/button'

function Login() {

    const router = useRouter()
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector((state) => state.customer)

    const [state, setState] = useState({})

    const onChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        dispatch(login(state))
    }

    if (data?.affectedRows >= 1) {
        router.push('/shop/order')
    }

    return (
        <>
            <Head>
                <title>Log in</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/login.png" />
            </Head>
            <Layout>
                <Form>
                    <FormTitle>Đăng nhập</FormTitle>
                    <FormContent>
                        <Input
                            label="Tài khoản"
                            type="text"
                            name="account"
                            placeholder="Enter your account"
                            onChange={(e) => { onChangeState(e) }}
                            error={data?.error || null}
                        />
                        <Input
                            label="Mật khẩu"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={(e) => { onChangeState(e) }}
                            error={data?.error || null}
                        />
                    </FormContent>
                    <FormAction>
                        <Button type="submit" onClick={handleLogin}>Login</Button>
                        <Link href="/shop/register">Đi đến đăng ký</Link>
                    </FormAction>
                </Form>
            </Layout>
        </>
    )
}

export default Login