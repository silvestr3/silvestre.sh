import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://blog.silvestre.sh/**")],
  },
};

export default nextConfig;
