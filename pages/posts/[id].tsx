import Head from 'next/head';

import { GetStaticProps, GetStaticPaths } from 'next';

import Date from '../../utils/date';

import {
    getAllPostIds,
    getPostData,
} from '../../lib/posts';

import Layout from '../../components/layout';

import utilStyles from '../../styles/utils.module.css';

interface IProps {
    postData: {
        title: string;
        body: string;
        date: string;
        contentHtml: string;
    }
}

const Post = ({ postData }: IProps) => {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}