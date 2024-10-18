import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [
      react(),
      isProduction && dts({ outDir: "dist/types", insertTypesEntry: true }),
      isProduction &&
        viteCompression({
          algorithm: "gzip",
          ext: ".gz",
          threshold: 10240,
        }),
    ].filter(Boolean),
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        isProduction ? "production" : "development"
      ),
    },
    server: {
      port: 3000,
    },
    build: {
      minify: isProduction ? "terser" : false,
      terserOptions: isProduction
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
            output: {
              comments: false,
            },
          }
        : undefined,
      lib: isProduction
        ? {
            entry: "./src/table-list-wrapper.tsx",
            name: "TableListComponent",
            formats: ["es", "umd"],
            fileName: (format) => `table-list-component.${format}.js`,
          }
        : undefined,
      rollupOptions: isProduction
        ? {
            // external: ["react", "react-dom"],
            // output: {
            //   globals: {
            //     react: "React",
            //     "react-dom": "ReactDOM",
            //   },
            // },
          }
        : undefined,
    },
  };
});
