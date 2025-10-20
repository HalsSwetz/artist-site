/** @type {import('next').NextConfig} */
const nextConfig = {
  // … other config …
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // optionally port: '', pathname: '/dghgutvux/image/upload/**'
        pathname: '/dghgutvux/image/upload/**',
      },
    ],
    // optional: domains: ['res.cloudinary.com'], for older Next versions
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;