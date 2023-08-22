/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration:false,
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/df9w7u89a/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
      // http://localhost:3000/video/(https://img.youtube.com/vi/9YffrCViTVk/0.jpg)
    ],
  },
}

module.exports = nextConfig
