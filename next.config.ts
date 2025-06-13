import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export
  },
  /* config options here */
};

export default nextConfig;
