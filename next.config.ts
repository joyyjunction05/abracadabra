import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Authorize mobile hardware testing over local network
  allowedDevOrigins: ["192.168.1.3", "localhost"],
};

export default nextConfig;
