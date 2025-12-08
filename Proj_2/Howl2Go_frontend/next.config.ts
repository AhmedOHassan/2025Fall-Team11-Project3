/**
 * @fileoverview Next.js configuration
 * @description Configuration for Next.js application build and runtime
 * @author Howl2Go Dev Team
 * @date 2025
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone", // Enable standalone build for Docker
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
