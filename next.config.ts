import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
