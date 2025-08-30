import { defineConfig } from "vite";
export default defineConfig({
  base: "/",          // dominio propio en raíz
  build: { outDir: "docs", emptyOutDir: true }
});
