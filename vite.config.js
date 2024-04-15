import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";
// import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? "/projet_12_portfolio_version_3"
      : "/",
  plugins: [react()],
  //resolve: {
  //alias: {
  // "@": fileURLToPath(new URL(".src, import.meta.url")),
  // },
  // },
});
