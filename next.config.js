/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gamerguides.com'],
    loader: 'custom',
    path: '/',
  },
};

module.exports = nextConfig;
