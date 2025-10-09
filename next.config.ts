import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",    // Microsoft, Apple, AWS, Lenovo, HP
      "storage.googleapis.com",  // Google Cloud official PNG
    ],
  },
};

export default nextConfig;
