/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'], // Add your image domains here
    deviceSizes: [640, 750, 1080, 1920], // Specify device sizes for image optimization
    imageSizes: [16, 32, 48, 64, 128, 256], // Specify image sizes for thumbnails and other images
  },
  performance: {
    optimizeFonts: true,
    optimizeImages: true,
  },
};

module.exports = nextConfig;