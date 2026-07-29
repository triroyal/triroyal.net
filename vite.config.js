import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dsv from "@rollup/plugin-dsv"
import path from "path"

export default defineConfig({
  plugins: [react(), dsv()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@images": path.resolve(__dirname, "./src/images"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
})
