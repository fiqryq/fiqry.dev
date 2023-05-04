const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
