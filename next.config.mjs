/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io",
          },
        ],
    },
  eslint: {
    ignoreDuringBuilds: true,
}
}


export default nextConfig;
