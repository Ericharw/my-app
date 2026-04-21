/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.uniqlo.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "store.pakaianfashionpria.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.newbalance.co.id",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;