import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		cssMinify: true,
		minify: "terser",
		cssCodeSplit: false,
		chunkSizeWarningLimit: 1000,
	},
	esbuild: {
		// jsxInject removed to prevent double React import
	},
	optimizeDeps: {
		include: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
	},
});