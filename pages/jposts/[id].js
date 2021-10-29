import Head from 'next/head';

import {
    getAllJPostIds,
    getJPostData,
} from '../../lib/posts';

import Layout from '../../components/layout';

import utilStyles from '../../styles/utils.module.css';


export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div>
                    {postData.body}
                </div>
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getAllJPostIds();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getJPostData(params.id);

    return {
        props: {
            postData
        }
    }
}