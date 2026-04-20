import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const { withContentlayer } = require("next-contentlayer");
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'none'; img-src 'self' data:; script-src 'none'",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default withContentlayer(withNextIntl(nextConfig));
