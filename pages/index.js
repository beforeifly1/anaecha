import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.HEROKU_URL}/posts`);
  const posts = await res.json();
  return {
    props: {
      posts
    }
  };
};

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Anaecha</title>
      </Head>
      <main>
        <h1>Hi! I am Anaecha.</h1>
        <h2>I am a part-time web developer and writer who is also interested in SEO and Internet Marketing.</h2>
        <h2>Posts:</h2>
        <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
        </ul>
      </main>
    </>
  );
};

export default Home;