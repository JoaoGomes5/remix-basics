import { json, Link, useLoaderData } from "remix";
import { getPosts } from "~/post";

export type PostProps = {
  slug: string;
  title: string;
};
export const loader = async () => {
  return json(await getPosts());
};

export default function Posts() {
  const posts = useLoaderData();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post:PostProps ) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}