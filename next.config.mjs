/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'loremflickr.com',  
            },
          ],
    }
};

export default nextConfig;
