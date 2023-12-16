/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {};

module.exports = withContentlayer(nextConfig);

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "source.unsplash.com",
            },
        ],
    },
    ...withContentlayer(nextConfig),
};
