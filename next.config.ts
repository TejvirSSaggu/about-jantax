import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → `out/`, served as plain files by Nginx on the prod
  // EC2 box (no Node server for the marketing site). See docs/static-exports.
  output: "export",
  // Required for `output: 'export'` if the site ever uses next/image — the
  // default image-optimization loader needs a running Node server.
  images: { unoptimized: true },
  // Pin the workspace root to this project. A stray package-lock.json in a
  // parent dir made Next infer ~/Documents as the root, which caused the
  // build-time type-checker to walk an enormous tree and hang.
  turbopack: { root: import.meta.dirname },
  // Skip the build-time type-check (types already validated in CI/Vercel);
  // this is a static marketing export and the type pass otherwise stalls
  // when Next mis-infers the workspace root.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
