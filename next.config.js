/** @type {import('next').NextConfig} */ const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['harshgoel.me', 'i.ibb.co'],
  },
}

module.exports = nextConfig
