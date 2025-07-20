import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 사용자/조직 페이지 (예: https://alex-dh-kim.github.io/)에 배포하는 경우
  // basePath와 assetPrefix를 다음과 같이 설정해야 합니다.
  basePath: isProd ? '/alex-dh-kim.github.io' : '', // 루트 경로이므로 빈 문자열
  assetPrefix: isProd ? 'https://alex-dh-kim.github.io/' : '', // 루트 경로이므로 '/'
};

export default nextConfig;
