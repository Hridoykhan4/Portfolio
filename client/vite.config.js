import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: "esnext", // Modern browsers only for smaller bundles
    minify: "esbuild",
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          // Splitting heavy vendors for better caching
          "vendor-react": ["react", "react-dom", "react-router"],
          "vendor-motion": ["motion/react"],
          "vendor-icons": ["react-icons/fi", "react-icons/hi"],
        },
        // Clean asset organization
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    // Prevent small chunks for HTTP/2 efficiency
    chunkSizeWarningLimit: 1000,
  },
  // Smooth Dev Experience
  server: {
    open: true,
    port: 3000,
  },
});
