import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		cssMinify: true,
		minify: "terser",
		cssCodeSplit: true,
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-dom'],
					animations: ['framer-motion'],
				},
			},
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
	esbuild: {
		// jsxInject removed to prevent double React import
	},
	optimizeDeps: {
		include: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
	},
});