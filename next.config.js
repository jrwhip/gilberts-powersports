/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['jaredwhipplellc-765105907.imgix.net'],
    unoptimized: true,
  },
}

module.exports = nextConfig
