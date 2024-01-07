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
        destination: "https://pablopunk.gumroad.com/l/swiftshift",
        permanent: false,
      },
      {
        source: "/download",
        destination: "https://pablopunk.gumroad.com/l/swiftshift",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
