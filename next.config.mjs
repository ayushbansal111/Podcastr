/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "intent-bison-324.convex.cloud",
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
    ],
  },
};

export default nextConfig;
