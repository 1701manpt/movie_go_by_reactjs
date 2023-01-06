// reactjs

// nextjs
import Head from 'next/head'

// components
import Authentication from '~/components/authentication/admin'
import Section, { SectionContent, SectionTitle } from '~/components/section'
import Table, { Cell, ProductItem, fieldProduct, Row, TableBody, TableHeader } from '~/components/table'

// layouts
import { useEffect } from 'react'
import Layout from '~/layouts/admin'

// redux
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import Button from '~/components/button'
import { getAll } from '~/redux/callApi/product'

export default function ManageCustomer() {

    const dispatch = useDispatch()
    const productList = useSelector((state) => state.product.list?.data)
    const loading = useSelector((state) => state.product.list.loading)

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    return (
        <Authentication>
            <Head>
                <title>Quản lý sản phẩm | Store Online</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/icon-manage-product.png' />
            </Head>
            <Layout>
                <Section>
                    <SectionContent>
                        <Link href='/admin/manage-product/add'><Button>Thêm sản phẩm mới</Button></Link>
                    </SectionContent>
                </Section>
                <Section>
                    <SectionTitle>Danh sách sản phẩm</SectionTitle>
                    <SectionContent>
                        <Table>
                            <TableHeader data={fieldProduct} />
                            <TableBody>
                                {loading
                                    ? <Row><Cell colSpan={8} center>loading....</Cell></Row>
                                    : !productList
                                        ? <Row><Cell colSpan={8} center>Không có dữ liệu</Cell></Row>
                                        : productList.map((product, i) => {
                                            return (
                                                <ProductItem data={product} index={i} />
                                            )
                                        })
                                }
                            </TableBody>
                        </Table>
                    </SectionContent>
                </Section>
            </Layout>
        </Authentication>
    )
}
