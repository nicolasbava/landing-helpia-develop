/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'statics.helpia.com',
        port: '',
        pathname: '/landing/**',
      },
    ],
  },
}

module.exports = nextConfig
