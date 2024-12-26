import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

// Generate Static Params
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(contentDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

// Page Component
export default async function Page({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error("Not Found");
  }

  // Read file content
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  // Process content to HTML
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <blockquote className="mt-4 pl-4 border-l-4 border-gray-500 italic text-gray-800">
        &quot;{data.description}&quot;
      </blockquote>
      <p className="text-gray-600">
        <strong>Author:</strong> {data.author}
      </p>
      <p className="text-gray-600">
        <strong>Date:</strong> {data.date}
      </p>
      <div
        className="mt-6 prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
}
