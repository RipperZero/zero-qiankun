import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // @see https://github.com/liuweiGL/vite-plugin-mkcert
    // mkcert({
    //   source: "coding",
    // }),
  ],
  // resolve: {
  //   alias: {
  //     "@": fileURLToPath(new URL("./src", import.meta.url)),
  //   },
  // },
  server: {
    port: 9527,
    host: true,
    cors: true,
    // https: true,
    proxy: {
      "/zero-test-factory": "http://localhost:3000",
    },
  },
});
