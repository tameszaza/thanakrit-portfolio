const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  basePath,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { cpus: 1 },
  devIndicators: false,
};
