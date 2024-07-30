/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    missingSuspenseWithCSRBailout: false,
  },
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
