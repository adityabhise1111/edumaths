/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com', // Google profile images
      'avatars.githubusercontent.com', // GitHub profile images
      'platform-lookaside.fbsbx.com', // Facebook profile images
    ],
  },
};

export default nextConfig;
