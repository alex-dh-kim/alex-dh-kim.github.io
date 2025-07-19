import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages에서 호스팅할 저장소 이름으로 변경하세요. 예: '/my-portfolio'
  basePath: '/<YOUR_REPOSITORY_NAME>',
  assetPrefix: '/<YOUR_REPOSITORY_NAME>/',
};

export default nextConfig;