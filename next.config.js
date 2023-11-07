/** @type {import('next').NextConfig}*/
const nextConfig = {
  trailingSlash: true,
  images: {
      domains: ["s3.us-west-2.amazonaws.com","127.0.0.1"]
    },
reactStrictMode: true,
webpack: (config) => {
config.externals = [...config.externals, "canvas", "jsdom"];
return config;
},
async headers() {
  return [
    {
      source: '/(.*)', // Match all routes
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable', // Cache for 1 year
        },
      ],
    },
  ];
},
}

module.exports = nextConfig
