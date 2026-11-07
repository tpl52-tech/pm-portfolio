import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be served as flat files by GitHub Pages.
  output: "export",
  // next/image has no server to optimize through in a static export.
  images: { unoptimized: true },
  // Emit each route as a directory with index.html, which GitHub Pages serves cleanly.
  trailingSlash: true,
  // Served from a project subpath on GitHub Pages (tpl52-tech.github.io/pm-portfolio),
  // so prefix routes and assets with the repo name.
  basePath: "/pm-portfolio",
  // Pin the tracing root to this project (a stray lockfile in the home dir
  // was otherwise being picked as the workspace root).
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
