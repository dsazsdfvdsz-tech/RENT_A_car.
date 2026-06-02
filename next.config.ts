import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  basePath: basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
