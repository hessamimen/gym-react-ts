import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //configration to use @ instead of ../../../src
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
