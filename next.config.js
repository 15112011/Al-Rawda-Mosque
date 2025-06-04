/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
  },
  // Enable static exports for Vercel
  output: 'standalone',
  // Add other configurations here if needed
};

module.exports = nextConfig; 