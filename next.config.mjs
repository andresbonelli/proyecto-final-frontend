/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_API_URL ?? "127.0.0.1",
      },
      // {
      //   protocol: "https",
      //   hostname: "vocal-nelie-andresbonelli-1d085aa1.koyeb.app",
      // },
      // {
      //   protocol: "https",
      //   hostname:"proyecto-final-frontend-navy.vercel.app/" ?? "127.0.0.1",
      // },
      {
        hostname: "acdn.mitiendanube.com",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
