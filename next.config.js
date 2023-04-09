/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})

const path = require('path')
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withPWA(nextConfig)
