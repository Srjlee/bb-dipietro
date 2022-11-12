/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    CLOUD_NAME: "dbzk3zeb6",
    API_KEY: "746543423797438",
    API_SECRET: "MVWgWZ-ah-m18_5kBdRRssImAcM",
    CLOUDINARY_URL:
      "cloudinary://746543423797438:MVWgWZ-ah-m18_5kBdRRssImAcM@dbzk3zeb6",
  },
  images: {
    domains: ["asset.cloudinary.com"],
  },
};

module.exports = nextConfig;
