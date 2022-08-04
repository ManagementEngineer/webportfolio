/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://cdn.cloudflare.steamstatic.com/',
  },
}

module.exports = nextConfig
