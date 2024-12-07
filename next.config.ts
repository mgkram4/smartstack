/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ZOOM_ACCOUNT_ID: process.env.ZOOM_ACCOUNT_ID,
    ZOOM_CLIENT_ID: process.env.ZOOM_CLIENT_ID,
    ZOOM_CLIENT_SECRET: process.env.ZOOM_CLIENT_SECRET,
  },
}

module.exports = nextConfig