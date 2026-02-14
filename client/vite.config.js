import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: "lightningcss",

    modulePreload: {
      polyfill: false,
    },

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor-react";

            if (id.includes("motion")) return "vendor-motion";

            if (id.includes("react-icons")) return "vendor-icons";

            return "vendor";
          }
        },

        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },

    chunkSizeWarningLimit: 1200,
  },

  server: {
    open: true,
    port: 5173,
  },
});
