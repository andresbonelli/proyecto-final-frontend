/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "acdn.mitiendanube.com",
      },
    ],
  },
};

export default nextConfig;
