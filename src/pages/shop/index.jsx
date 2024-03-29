// reactjs
import { useEffect } from 'react'

// nextjs
import Head from 'next/head'

// components
import CategoryItem from '~/components/list/category'
import List from '~/components/list'
import Section, { SectionContent, SectionTitle } from '~/components/section'
import ProductItem from '~/components/list/product'

// layouts
import Layout from '~/layouts'

// redux
import { useDispatch, useSelector } from 'react-redux'
import * as productApi from '~/redux/callApi/product'
import * as categoryApi from '~/redux/callApi/category'

export default function Shop ()
{
    const dispatch = useDispatch()
    const productList = useSelector( ( state ) => state.product.list )
    const categoryList = useSelector( ( state ) => state.category.list )

    useEffect( () =>
    {
        const getProducts = () =>
        {
            dispatch( productApi.getAll() )
        }

        const getCategories = () =>
        {
            dispatch( categoryApi.getAll() )
        }

        getProducts()
        getCategories()
    }, [ dispatch ] )

    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/icon-shop.png' />
            </Head>
            <Layout>
                <Section>
                    <SectionTitle>Danh mục</SectionTitle>
                    <SectionContent>
                        { categoryList.loading ? (
                            <div>loading....</div>
                        ) : categoryList.data?.length <= 0 ? (
                            <div>Không có danh mục</div>
                        ) : (
                            <List
                                data={ categoryList.data }
                                item={ CategoryItem }
                            />
                        ) }
                    </SectionContent>
                </Section>
                <Section>
                    <SectionTitle>Sản phẩm thịnh hành</SectionTitle>
                    <SectionContent>
                        { productList.loading ? (
                            <div>loading....</div>
                        ) : productList.data?.length <= 0 ? (
                            <div>Không có sản phẩm</div>
                        ) : (
                            <List data={ productList.data } item={ ProductItem } />
                        ) }
                    </SectionContent>
                </Section>
                <Section>
                    <SectionTitle>Sản phẩm ưu đãi</SectionTitle>
                    <SectionContent>
                        { productList.loading ? (
                            <div>loading....</div>
                        ) : productList.data?.length <= 0 ? (
                            <div>Không có sản phẩm</div>
                        ) : (
                            <List data={ productList.data } item={ ProductItem } />
                        ) }
                    </SectionContent>
                </Section>
            </Layout>
        </>
    )
}
