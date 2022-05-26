/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/network/2739',
        permanent: true
      },
      {
        source: '/network',
        destination: '/network/2739',
        permanent: true
      },
      {
        source: '/show',
        destination: '/show/92749',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
