import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // 静的書き出し（サーバー不要）
  trailingSlash: true,    // 旧WordPressと同じ /faq/ 形式のURLにする
  images: { unoptimized: true },
};

export default nextConfig;
