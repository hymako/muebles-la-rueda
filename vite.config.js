import { defineConfig } from "vite";

// base relativa para que los assets cuelguen de la URL actual (sirve en dominio propio y en /<repo>/)
export default defineConfig({
  base: "./",
  build: {
    outDir: "docs",
    emptyOutDir: true
  }
});
