"use client";
import Typed from 'typed.js';

import { Button } from '@/components/ui/button';

import Image from 'next/image'
import React , {useRef , useEffect} from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Homepage = () => {






  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Designing', 'Open Source'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);






  return (
   <main>

{/* *************************************** HomePage Section 1  ***************************************** */}

<section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
  <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
    <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
      A <span className="font-semibold">comprehensive blog</span> for community insights 
      <br className="hidden lg:block" /> using{" "}
      <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
    </h1>
    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
      Discover open-source articles, tutorials, and guides to <br className="hidden lg:block" /> enhance your knowledge and projects!
    </p>
    <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
      <form
        action="https://www.creative-tim.com/twcomponents/search"
        className="flex flex-wrap justify-between md:flex-row"
      >
        
      

       
      </form>

    </div>




    

    <div className="mt-6">
    <Link href="https://github.com/MAHABRIZWAN4" target="_blank"><Button className="mx-1 text-sm" variant="outline">
      <FaGithub /> Github
    </Button></Link>
    <Link href="https://www.linkedin.com/in/mahab-rizwan-831095341/" target="_blank"><Button className="mx-1 text-sm" variant="outline">
      <FaLinkedin /> Linkedin
    </Button></Link>
  </div>

  </div>
  <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
    <Image
      src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
      alt="blog illustration"
      height={100}
      width={100}
      className="w-full h-full max-w-md mx-auto"
    />
  </div>
</section>










 
{/* *************************************** HomePage Section 2  ***************************************** */}

<section className="py-16 bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">Membership Plans</h2>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
      Affordable and flexible plans to access exclusive content, tutorials, and blog posts.
    </p>
    <div className="grid gap-8 mt-12 md:grid-cols-3">
      {/* Basic Plan */}
      <div className="p-8 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Perfect for readers who are just starting out.
        </p>
        <div className="my-6 text-5xl font-bold text-gray-800 dark:text-gray-200">
          $9<span className="text-lg font-medium">/month</span>
        </div>
        <ul className="mb-6 space-y-3 text-gray-600 dark:text-gray-400">
          <li>✔ Access to Basic Articles</li>
          <li>✔ Weekly Newsletter</li>
          <li>✔ Email Support</li>
        </ul>
        <button className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
          Get Started
        </button>
      </div>
      {/* Standard Plan (Highlighted) */}
      <div className="relative p-8 bg-white border-4 border-green-500 rounded-lg shadow-md dark:bg-gray-800 dark:border-green-500 hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
        <span className="absolute top-0 left-1/2 px-3 py-1 text-sm font-medium text-green-700 bg-green-100 border border-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2">
          Most Popular
        </span>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Best for individuals and small teams who want more content.
        </p>
        <div className="my-6 text-5xl font-bold text-gray-800 dark:text-gray-200">
          $29<span className="text-lg font-medium">/month</span>
        </div>
        <ul className="mb-6 space-y-3 text-gray-600 dark:text-gray-400">
          <li>✔ Access to Premium Articles</li>
          <li>✔ Weekly Newsletter</li>
          <li>✔ Priority Support</li>
        </ul>
        <button className="w-full px-4 py-2 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800">
          Choose Standard
        </button>
      </div>
      {/* Premium Plan */}
      <div className="p-8 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Ideal for bloggers, teams, and enterprises looking for exclusive content.
        </p>
        <div className="my-6 text-5xl font-bold text-gray-800 dark:text-gray-200">
          $49<span className="text-lg font-medium">/month</span>
        </div>
        <ul className="mb-6 space-y-3 text-gray-600 dark:text-gray-400">
          <li>✔ Unlimited Access to All Articles</li>
          <li>✔ Weekly Newsletter</li>
          <li>✔ Dedicated Support</li>
        </ul>
        <button className="w-full px-4 py-2 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800">
          Go Premium
        </button>
      </div>
    </div>
  </div>
</section>








{/* *************************************** HomePage Section 3  ***************************************** */}
<section className="relative py-16 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-950 dark:to-gray-700">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-white">
      Why Follow Our Blog?
    </h2>
    <p className="mt-4 text-lg text-white">
      Discover the reasons why our blog stands out in delivering value to our readers.
    </p>
    <div className="grid gap-8 mt-12 md:grid-cols-3">
      <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold text-white">High-Quality Content</h3>
        <p className="mt-2 text-white">
          Expertly written articles that keep you informed and engaged.
        </p>
      </div>
      <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold text-white">Expert Insights</h3>
        <p className="mt-2 text-white">
          Gain valuable insights from industry professionals and thought leaders.
        </p>
      </div>
      <div className="p-6 bg-white bg-opacity-20 rounded-lg shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold text-white">Trustworthy Information</h3>
        <p className="mt-2 text-white">
          Reliable and fact-checked content that you can trust.
        </p>
      </div>
    </div>
  </div>
  <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 opacity-30 rounded-full blur-xl animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400 opacity-30 rounded-full blur-xl animate-pulse"></div>
</section>





{/* *************************************** HomePage Section 4  ***************************************** */}

<section className="py-16 bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200">
      Top Blogs
    </h2>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
      Explore our most popular and insightful Blogs.
    </p>
    <div className="grid gap-8 mt-12 md:grid-cols-3">
      {/* Blog 1  */}
      <div className="p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 hover:shadow-xl transition duration-300">
        <Image src="/next-js.webp" alt="Blog 1" width={100} height={100} className="w-full h-48 rounded-md mb-4 object-cover"></Image>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Next.js-15 Blog
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
        Learn how to build fast, modern web applications with Next.js-15. 
        Explore powerful features like server-side rendering and API routes.
        </p>
        <a href="/blog" className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline">
          Read More →
        </a>
      </div>
       {/* Blog 2 */}
      <div className="p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 hover:shadow-xl transition duration-300">
        <Image src="/sanity.png"  width={100} height={100} alt="Blog 2" className="w-full h-48 rounded-md mb-4 object-cover"></Image>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
         Sanity Blog
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
        Discover how Sanity empowers content creators with its flexible CMS. 
        Learn to manage structured content for modern digital experiences.
        </p>
        <a href="/blog" className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline">
          Read More →
        </a>
      </div>
       {/* Blog 3  */}
      <div className="p-6 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 hover:shadow-xl transition duration-300">
        <Image src="/ai-agent.webp" alt="Blog 3" width={100} height={100} className="w-full h-48 rounded-md mb-4 object-cover"></Image>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          AI-Agent Blog
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
        Explore how AI agents are transforming industries with automation and smart decision-making. 
        Dive into practical applications and emerging trends in artificial intelligence.
        </p>
        <a href="/blog" className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline">
          Read More →
        </a>
      </div>
    </div>
  </div>
</section>









   </main>
  )
}

export default  Homepage
