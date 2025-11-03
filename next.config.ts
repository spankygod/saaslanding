import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Ensure Turbopack uses the repository root as the project root.
     This fixes errors where Turbopack infers `app/` as the workspace root
     and can't resolve the `next` package from that directory. */
  turbopack: {
    // use the project root (relative to this config file)
    root: ".",
  },
};

export default nextConfig;
