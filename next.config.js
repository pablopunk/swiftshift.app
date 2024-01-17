/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/count.js",
        destination: "https://gc.zgo.at/count.js",
      },
      {
        source: "/goat",
        destination: "https://swiftshift.goatcounter.com/count",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/buy",
        destination:
          "https://pablopunk.lemonsqueezy.com/checkout/buy/3f0a94d5-c49d-4d40-b847-dae2388f60f4",
        permanent: false,
      },
      {
        source: "/download",
        destination:
          "https://pablopunk.lemonsqueezy.com/checkout/buy/3f0a94d5-c49d-4d40-b847-dae2388f60f4",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
