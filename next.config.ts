import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',                 // static export for GitHub Pages
  trailingSlash: true,              // nicer URLs on Pages
};

export default nextConfig;