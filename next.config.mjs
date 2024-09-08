import { fileURLToPath } from 'url';
/** @type {import('next').NextConfig} */
import path from 'path';

// 👈 추가

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'static.nike.com' }],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/index.scss";`,
  },
  reactStrictMode: false,
};

export default nextConfig;
