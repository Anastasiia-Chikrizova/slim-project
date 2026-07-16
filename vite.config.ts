import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import envCompatible from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [react(), svgr(), envCompatible()],
  server: {
    host: true,
    port: 3000,
  },
});
