import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Helper to replace import.meta.dirname if your environment doesn't support it yet
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Points directly to your source folder
      "@": path.resolve(__dirname, "client/src"),
      // Keeps access to shared schemas/types if you still use them for frontend validation
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  // Root is set to client where index.html is located
  root: path.resolve(__dirname, "client"),
  build: {
    // Standard build output for a website
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    // Standard port for Vite
    port: 5173,
    // Removed the backend proxy since you no longer have a Node.js server
    fs: {
      strict: false,
    },
  },
});