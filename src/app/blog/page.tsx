import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const Blog = () => {
  // Read the content directory and process markdown files
  const dirContent = fs.readdirSync("content", "utf-8");
  const blogs = dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return data;
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
          Latest Blogs
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Discover fresh perspectives and expert advice on trending topics.
        </p>

        {/* Blog Cards */}
        <div className="grid gap-8 mt-12 md:grid-cols-3 sm:grid-cols-1">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={100}
                height={100}
                className="w-full h-48 rounded-t-lg object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {blog.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {blog.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

