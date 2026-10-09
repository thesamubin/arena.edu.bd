import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arenawebsecurity.net",
      },
      {
        protocol: "https",
        hostname: "www.arenawebsecurity.net",
      },
    ],
  },
};

export default nextConfig;
