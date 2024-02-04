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
      ],
    },
  };
  
  export default nextConfig;
  