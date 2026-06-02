import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // The project ships without an ESLint config; don't block production builds.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
