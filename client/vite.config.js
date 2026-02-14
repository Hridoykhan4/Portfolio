import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer"; // Optional: helps see what's heavy

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    visualizer({ open: false, filename: "bundle-report.html" }),
  ],

  build: {
   
    target: "esnext",

    // 2. Use LightningCSS for industry-leading minification
    cssMinify: "lightningcss",

    // 3. Terser for deep JS compression & cleaning
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.info",
          "console.log",
          "console.debug",
          "console.warn",
        ],
      },
    },

    // 4. Advanced Chunking Strategy
    rollupOptions: {
      output: {
        // Prevents small files from creating too many HTTP requests
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",

        manualChunks(id) {
          // Move core framework to its own cacheable layer
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            ) {
              return "vendor-core";
            }
            // Isolate animation engine (framer-motion/motion)
            if (id.includes("framer-motion") || id.includes("motion")) {
              return "vendor-animation";
            }
            // Icons are often heavy; keep them separate
            if (id.includes("react-icons")) {
              return "vendor-icons";
            }
          }
        },
      },
    },

    // 5. Optimization Tweaks
    reportCompressedSize: false, // Speeds up build time slightly
    chunkSizeWarningLimit: 500, // Standard limit
  },
});
