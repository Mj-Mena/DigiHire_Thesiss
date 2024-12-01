import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import fs from "fs";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: 5173,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "certs", "server.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "certs", "server.crt")),
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for `src` directory
    },
  },
});
