/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: "/home", //<-- basePathe dipake untuk ngubah url halaman utama
  // images.remotePatters untuk memberikan izin untuk menggunakan gambar dari sumber eksternal
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/**/*",
      },
    ],
  },
};

export default nextConfig;

/**
 * file next config js dibuat otomatis oleh nextjs di root folder untuk ngatur
 konfigurasi
 * lebih detail bisa baca  di https://nextjs.org/docs/pages/api-reference/next-config-js
 */
