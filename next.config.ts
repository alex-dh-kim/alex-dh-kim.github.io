import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages에 배포할 때만 basePath와 assetPrefix를 적용
  basePath: isProd ? '/alex-dh-kim.github.io' : '', // YOUR_REPOSITORY_NAME을 실제 저장소 이름으로 변경
  assetPrefix: isProd ? '/alex-dh-kim.github.io/' : '', // YOUR_REPOSITORY_NAME을 실제 저장소 이름으로 변경
};

export default nextConfig;