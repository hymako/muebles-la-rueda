import { defineConfig } from "vite";

export default defineConfig({
  base: "/",                 // con dominio propio, base raíz
  build: {
    outDir: "docs",          // GitHub Pages servirá /docs
    emptyOutDir: true
  }
});
