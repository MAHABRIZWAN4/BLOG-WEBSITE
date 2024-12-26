/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Strict mode enable karta hai (recommended)
    trailingSlash: false, // Trailing slashes ke liye configuration
    output: 'standalone', // Serverless aur standalone mode ke liye
  };
  
  export default nextConfig;
  