/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  experimental: {
    scrollRestoration:false,
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/df9w7u89a/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**',
      },
      // http://localhost:3000/video/(https://img.youtube.com/vi/9YffrCViTVk/0.jpg)
    ],
  },
}

module.exports = nextConfig
