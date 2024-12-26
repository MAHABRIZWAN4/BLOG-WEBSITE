import React from 'react';
import { FaFacebook} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 px-4 sm:px-16">
      <div className="container mx-auto text-center sm:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We provide insightful articles and the latest updates in the tech world. Stay tuned for our most informative and trending blogs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-400">About</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-blue-400">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className='flex flex-col gap-4 text-3xl sm:text-2xl'>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-6 justify-center sm:justify-start">
              <FaGithub className="hover:text-gray-400 cursor-pointer"/>
              <FaLinkedin className="hover:text-gray-400 cursor-pointer"/>
              <FaFacebook className="hover:text-gray-400 cursor-pointer"/>
              <FaInstagramSquare className="hover:text-gray-400 cursor-pointer"/>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Mahab'sBlog &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
