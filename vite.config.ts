import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // Consider switching to @vitejs/plugin-react if SWC issues persist
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Updated base path for GitHub Pages
  base: process.env.BASE_PATH || "/your-repo-name/", // Replace 'your-repo-name' with your actual repository name
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optional: Add build configuration
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: mode === 'development'
  }
}));