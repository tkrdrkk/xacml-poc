import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import * as path from "path";
import * as fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    open: true,
  },
  root: "./src",
  build: {
    outDir: "../public",
    emptyOutDir: true,
  },
  plugins: [react(), VitePWA()],
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
    },
  },
});
