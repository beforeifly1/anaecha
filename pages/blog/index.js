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

const Blog = ({ posts }) => {
  return (
    <main>
      <h1>Blog</h1>
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
  );
};

export default Blog;