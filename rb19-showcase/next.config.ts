import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // React strict mode for better development
  reactStrictMode: true,

  // Ensure proper static optimization
  output: 'standalone',
};

export default nextConfig;
