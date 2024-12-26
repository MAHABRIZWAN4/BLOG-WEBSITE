import rehypeDocument from 'rehype-document' 
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'






import rehypePrettyCode from "rehype-pretty-code";





import { transformerCopyButton } from '@rehype-pretty/transformers'






// const blog = {
//     title: "My Blog Title",
//     author: "John Doe",
//     description: "This is a brief description of the blog.",
//     date: "2024-12-23",
//     content: "<p>This is the HTML content of the blog. It can include <strong>formatted text</strong>, links, and more.</p>",
//   };
  

// Uper wale blog ko ko dynamically blog kerna he mujhe :
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import OnThisPage from '@/app/component/OnThisPage'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import rehypeSlug from 'rehype-slug'

  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {



// Dynamically bloggind add





const filePath = `content/${(await params).slug}.md`




// Agar 404 aay to kyia kerna he mujhe :


if (!fs.existsSync(filePath)) {
  notFound()
  return  
}

// File ko read kerna he mujhe :
const fileContent = fs.readFileSync(filePath, "utf-8")
const {content, data}= matter(fileContent) 














// Use ker rajhe hein unified ka content ko html content  kerne ke liye:
const processor  = unified()
.use(remarkParse)
.use(remarkRehype)
.use(rehypeDocument, {title: '👋🌍'})
.use(rehypeFormat)
.use(rehypeStringify)
.use(rehypeAutolinkHeadings)
.use(rehypeSlug)
.use(rehypePrettyCode, {
    theme:"github-dark",
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
})

const htmlContent  = ((await processor.process(content))).toString()







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

<OnThisPage htmlContent={htmlContent} />
      </div>
    );
  }
   