import axios from "axios";
import { GetServerSideProps } from "next";
import { BlogGrid, BlogGridProps, BlogPost } from "../components/BlogGrid";

export const getServerSideProps: GetServerSideProps = async () => {
  // Ordena o array a partir da data de criação do post
  function sortBlogPostsByDate(posts: BlogPost[]) {
    return posts.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  const res = await axios.get("http://localhost:3000/blogPosts");
  const posts = sortBlogPostsByDate(res.data);

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }: BlogGridProps) {
  return (
    <div className="w-full h-[100vh] flex bg-white flex-col">
      <BlogGrid posts={posts} />
    </div>
  );
}
