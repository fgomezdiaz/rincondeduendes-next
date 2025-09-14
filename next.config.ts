import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'didkqst3j',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
