/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'placehold.co',
      // Add other hostnames here if needed
    ],
  },
  // Add other configurations here if needed
};

module.exports = nextConfig; 