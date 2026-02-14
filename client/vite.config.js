import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          // Bundle core essentials together to prevent multiple network requests
          "vendor-core": [
            "react",
            "react-dom",
            "react-router",
            "framer-motion",
          ],
        },
      },
    },
  },
});
