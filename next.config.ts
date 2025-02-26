import type { NextConfig } from "next";
const { withContentlayer } = require('next-contentlayer')


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
        ],
    },
}

export default withContentlayer(nextConfig)