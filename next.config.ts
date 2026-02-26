import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/2Go-a-freshness-first-beverage-brand",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
