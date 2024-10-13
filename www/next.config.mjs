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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
    ],
  },
  env: {
    MARKET_NEWS_KEY: "pub_555682a11cc842d39b9f94c41e7e159c2c70c",
  },
};

export default nextConfig;
