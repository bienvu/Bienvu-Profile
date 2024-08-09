/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-bien.pantheonsite.io",
      },
      {
        protocol: "https",
        hostname: "www.sentiusdigital.com",
      },
      {
        protocol: "https",
        hostname: "www.skillinvest.com.au",
      },
      {
        protocol: "https",
        hostname: "www.varta.org.au",
      },
    ],
  },
};

module.exports = nextConfig;
