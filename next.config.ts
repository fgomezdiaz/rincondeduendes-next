import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [{ hostname: "res.cloudinary.com" }],
    // Optimización de imágenes: usar formatos modernos
    formats: ['image/avif', 'image/webp'],
    // Tiempo de caché para imágenes optimizadas (24 horas)
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
