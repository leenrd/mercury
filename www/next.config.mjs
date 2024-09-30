/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/market",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
