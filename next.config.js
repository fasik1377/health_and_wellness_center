/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // ✅ Use root prefix for assets (works for GitHub Pages and GoDaddy)
  assetPrefix: '/',
  
  // ✅ Make sure no base path is used
  basePath: '',
};

module.exports = nextConfig;
