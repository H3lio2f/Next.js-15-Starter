/** @type {import('next').NextConfig} */

import withNextIntl from "next-intl/plugin";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com"
      },
    ],
  },
};

export default withNextIntl()(nextConfig);
