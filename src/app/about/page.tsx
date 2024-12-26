import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-[1200px]">
      <div className="flex flex-col items-center">
        
        {/* About Me Section */}
        <div className="shadow-2xl h-auto rounded-lg p-8 mt-9 w-11/12 md:w-8/12 lg:w-11/12 mb-10 flex flex-col items-center">
          <Image
            src="/about.webp"
            alt="Mahab"
            width={100}
            height={100}
            className="rounded-full w-32 h-32 mb-4 border-4 border-indigo-500 shadow-lg"
          />
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-4 animate-pulse">About Me</h1>
          <p className="text-gray-700 text-lg leading-7 text-center dark:text-white">
            Hey there! I’m <strong>Mahab Rizwan</strong>, a passionate web developer on a mission to build beautiful, intuitive, and responsive websites. I believe in the power of blending creativity with technology to craft digital experiences that are not only functional but also delightful to use. Whether it's a sleek design, smooth animations, or seamless user interfaces, I’m here to make sure every project I work on leaves a lasting impression. Let’s create something amazing together!
          </p>

          <div className="mt-6">
            <Link href="https://github.com/MAHABRIZWAN4" target="_blank"><Button className="mx-1 text-sm" variant="outline">
              <FaGithub /> Github
            </Button></Link>
            <Link href="https://www.linkedin.com/in/mahab-rizwan-831095341/" target="_blank"><Button className="mx-1 text-sm" variant="outline">
              <FaLinkedin /> Linkedin
            </Button></Link>
          </div>

          <h2 className="text-3xl font-bold text-indigo-600 mt-10 mb-6 animate-pulse">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'HTML & CSS', icon: 'fa fa-html5', color: 'text-orange-500' },
              { name: ' TypeScript', icon: 'fa fa-js-square', color: 'text-yellow-500' },
              { name: 'Next.js', icon: 'fa fa-react', color: 'text-blue-500' },
              { name: 'Tailwind CSS', icon: 'fa fa-css3-alt', color: 'text-cyan-500' },
              { name: 'Git & GitHub', icon: 'fa fa-github', color: 'text-gray-700' },
              { name: 'Responsive Design', icon: 'fa fa-mobile-alt', color: 'text-green-500' },
              { name: 'Figma-UI/UX', icon: 'fa fa-code', color: 'text-blue-700' },
              { name: 'Sanity', icon: 'fa fa-layer-group', color: 'text-indigo-700' },
            ].map((skill, index) => (
              <div
                key={index}
                className="group relative p-4 bg-indigo-100 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center">
                  <i className={`${skill.icon} ${skill.color} text-5xl mb-2`}></i>
                  <h3 className="text-lg font-bold text-indigo-600 group-hover:text-indigo-800">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coding Journey Section */}
        <div className="shadow-2xl rounded-lg p-8 w-11/12 md:w-8/12 lg:w-11/12 flex flex-col items-center">
          <Image
            src="/2.png"
            alt="Coding Journey"
            height={100}
            width={100}
            className="rounded-lg w-72 h-40 mb-4 border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-4xl font-extrabold text-blue-700 mb-4 animate-pulse">
            Mahab&apos;s Coding Journey
          </h1>
          <p className="text-gray-700 text-lg leading-8 text-center mb-4 dark:text-white">
            My coding journey began with the *Governor Sindh Initiative for Artificial Intelligence, Web 3.0 & Metaverse*&#39;a transformative opportunity that introduced me to the world of cutting-edge technologies.
            From mastering the fundamentals of HTML , CSS And Typescript, diving into the depths of Next-js, and embracing the power of Figma-UI/UX And Sanity, every milestone has shaped my passion.
          </p>
          <p className="text-gray-700 text-lg leading-7 text-center dark:text-white">
            This journey has been an exciting adventure, filled with challenges and triumphs. Each line of code brings me closer to creating impactful projects that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
}
