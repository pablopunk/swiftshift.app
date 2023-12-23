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
};

module.exports = nextConfig;
