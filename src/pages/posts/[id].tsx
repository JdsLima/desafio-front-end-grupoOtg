import axios from "axios";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

interface Post {
  id: string;
  title: string;
  summary: string;
  content: string;
  createdAt: string;
  author: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get("http://localhost:3000/blogPosts");
  const posts: Post[] = await res.data;

  // Gera os caminhos a partir dos IDs dos posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: 'blocking' }; // 'blocking' espera a geração da página
};

// Função para buscar os dados do post
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/blogPosts/${params?.id}`);
  const post: Post = res.data;

  return { props: { post }, revalidate: 60 }; // Passa os dados do post como props para o componente
};

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <main className="pt-8 h-screen pb-16 lg:pt-16 lg:pb-24 bg-white">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                <div>
                  <p className="text-xl text-gray-900">Autor: {post.author}</p>
                  <p className="text-base text-gray-500 ">
                    Data: {post.createdAt.split('-').reverse().join('/')}
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              {post.title}
            </h1>
          </header>
          <p className="lead text-gray-500">{post.content}</p>
        </article>
      </div>
    </main>
  );
}
