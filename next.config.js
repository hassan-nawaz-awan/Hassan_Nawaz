/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/hassan-nawaz-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hassan-nawaz-website/' : '',
};

module.exports = nextConfig;
