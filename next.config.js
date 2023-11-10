/** @type {import('next').NextConfig}*/
const nextConfig = {
  trailingSlash: true,
  images: {
      domains: ["s3.us-west-2.amazonaws.com","127.0.0.1"],
      formats: ['image/webp','image/avif'],
    },
reactStrictMode: true,
webpack: (config) => {
config.externals = [...config.externals, "canvas", "jsdom"];
return config;
},
}

module.exports = nextConfig
