/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'muzeulvirtual.ro',
          port: '',
          pathname: '/wp-content/uploads/**',
        },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/wikipedia/commons/**',
      }
    ],
    },
  };
  
  export default nextConfig;
  