/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        formats:['image/avif','image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.shutterstock.com',
           
          },
        ],
      },
};

export default nextConfig;
