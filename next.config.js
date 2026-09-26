/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: 'export',
  // Emit /pharma/index.html etc. so static hosting serves clean URLs
  trailingSlash: true,
  distDir: 'dist',
  images: { unoptimized: true },
}

module.exports = nextConfig
