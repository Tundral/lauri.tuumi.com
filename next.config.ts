import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lauri.tuumi.com",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
