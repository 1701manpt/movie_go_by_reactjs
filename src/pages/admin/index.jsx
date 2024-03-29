// reactjs

// nextjs
import Head from 'next/head'
import Authentication from '~/components/authentication/admin'
import List from '~/components/list'
import StatisticItem, { StatisticData } from '~/components/list/statistic'
import Section, { SectionContent } from '~/components/section'

// components

// layouts
import Layout from '~/layouts/admin'

// redux

export default function Admin() {
    return (
        <Authentication>
            <Head>
                <title>Administrator | Store Online</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/icon-admin.png' />
            </Head>
            <Layout>
                <Section>
                    <SectionContent>
                        <List
                            data={StatisticData}
                            item={StatisticItem}
                            column={4}
                        />
                    </SectionContent>
                </Section>
            </Layout>
        </Authentication>
    )
}
