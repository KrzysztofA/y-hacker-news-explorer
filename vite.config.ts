import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    include: ['**/*.test.tsx'],
    globals: true
  },
});
