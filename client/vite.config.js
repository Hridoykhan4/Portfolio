import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // 1. Enable CSS Minification
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        // 2. Split heavy libraries into separate files
        manualChunks: {
          "motion-vendor": ["motion/react"],
          "react-vendor": ["react", "react-dom", "react-router"],
          "icons-vendor": ["react-icons/fi", "react-icons/hi"],
        },
      },
    },
  },
});
