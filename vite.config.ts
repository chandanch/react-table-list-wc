import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
// import nodePolyfills from "rollup-plugin-polyfill-node";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    dts({ outDir: "dist/types", insertTypesEntry: true }),
    viteCompression({
      algorithm: "gzip", // Set the compression algorithm to gzip
      ext: ".gz", // Use .gz as the extension for compressed files
      threshold: 10240, // Only compress files larger than 10kb
    }),
  ],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    minify: "terser", // Ensure minification
    terserOptions: {
      compress: {
        drop_console: true, // Removes console statements
        drop_debugger: true, // Removes debugger statements
      },
      output: {
        comments: true, // Removes comments to reduce bundle size
      },
    },
    lib: {
      entry: "./src/table-list-wrapper.tsx",
      name: "TableListComponent",
      formats: ["es", "umd"],
      fileName: (format) => `table-list-component.${format}.js`,
    },
    rollupOptions: {
      // external: ["react", "react-dom"],
      // output: {
      //   globals: {
      //     react: "React",
      //     "react-dom": "ReactDOM",
      //   },
      // },
    },
  },
});
