import Head from 'next/head'
import Link from 'next/link';

import { GetStaticProps } from 'next'

import Date from '../utils/date';

import Layout, { siteTitle } from '../components/layout';

import {
    getSortedPostsData,
    getSortedJPostsData,
} from '../lib/posts';


import utilStyles from '../styles/utils.module.css';

export default function Home({
    allPostsData,
    allJPostsData,
}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello i'm Pavel. Frontend developer.</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
                <h2 className={utilStyles.headingLg}>Blog from FileSystem</h2>

                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>

                <h2 className={utilStyles.headingLg}>Blog from Fetch</h2>
                <ul className={utilStyles.list}>
                    {allJPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/jposts/${id}`}>
                                <a>{title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    const allJPostsData = await getSortedJPostsData();

    return {
        props: {
            allPostsData,
            allJPostsData,
        }
    }
}

// export const getServerSideProps: GetServerSideProps  = async (context) => {
//     console.log('context -> ', context);
//     const allPostsData = getSortedPostsData();
//     const allJPostsData = await getSortedJPostsData();
//
//     return {
//         props: {
//             allPostsData,
//             allJPostsData,
//         }
//     }
// }