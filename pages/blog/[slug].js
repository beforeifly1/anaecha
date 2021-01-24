import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.HEROKU_URL}/posts`);
    const posts = await res.json();
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`${process.env.HEROKU_URL}/posts?slug=${params.slug}`);
    const post = await res.json();
    return {
        props: {
            post: post[0]
        }
    }
};

const Post = ({ post }) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main>
                <article>
                    <h1>{post.title}</h1>
                    <p>
                        {moment(post.published_at).format('D MMM')} . 
                        <Link href={`/blog/category/${post.category.name}`}>
                            <a>{post.category.name}</a>
                        </Link>
                    </p>
                    <ReactMarkdown source={post.content} />
                </article>
            </main>
        </>
    );
};

export default Post;