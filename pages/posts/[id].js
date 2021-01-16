import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostsData } from '../../lib/posts'
import Date from '../../components/date'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <div><title>{postData.id}</title></div>
            </Head>
            <Date dateString={postData.date} />
            {postData.title}<br />
            {postData.id}<br />
            {postData.date}<br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>)
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    console.log('params:', params)
    const postData = await getPostsData(params.id)
    return {
        props: {
            postData
        }
    }

}