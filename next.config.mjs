/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: `http://localhost:4000/images/:path*`,
      },
    ];
  },
};

export default nextConfig;
