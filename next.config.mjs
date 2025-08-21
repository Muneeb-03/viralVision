/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

export default nextConfig;
