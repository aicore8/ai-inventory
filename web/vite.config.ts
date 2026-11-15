import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: "../dist/web",
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // The resource folder plus the workspace root: bun keeps the packages (fonts) in its store there.
    fs: { allow: ["..", "../../../../node_modules"] },
  },
});
