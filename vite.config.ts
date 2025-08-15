import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; 
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Custom domain uses root path
  base: "/", 
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: mode === 'development',
    // Additional optimizations
    minify: mode === 'production' ? 'esbuild' : false,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['react-router-dom', 'react-hook-form'],
        }
      }
    }
  },
  // Cache control for development
  cacheDir: `./.vite`,
  // Preview configuration
  preview: {
    port: 8080,
    strictPort: true
  }
}));