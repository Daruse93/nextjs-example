import Head from 'next/head';

import {
    GetStaticPaths,
    GetStaticProps,
} from 'next';

import {
    getAllJPostIds,
    getJPostData,
} from '../../lib/posts';

import Layout from '../../components/layout';

import utilStyles from '../../styles/utils.module.css';

interface IProps {
    postData: {
        title: string;
        body: string;
    }
}

const JPost = ({ postData }: IProps) => {
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

export default JPost;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllJPostIds();

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getJPostData(params.id);

    return {
        props: {
            postData
        }
    }
}