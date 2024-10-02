import { motion } from "framer-motion";
import Link from "next/link";

export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  content: string;
  createdAt: string;
};

export type BlogGridProps = {
  posts: BlogPost[];
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.6;

    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 1 },
      },
    };
  },
};

export const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Últimos posts publicados
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {posts?.map((post, i) => (
            <motion.div key={post.id} initial="hidden" animate="visible">
              <motion.div variants={draw} custom={i / 2}>
                <Link href={`/posts/${post.id}`}>
                  <div className="group relative shadow-lg lg:h-80 bg-cyan-300 p-8 min-h-64 rounded-lg cursor-pointer">
                    <h3 className="text-xl text-gray-700 font-semibold">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{post.summary}</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
