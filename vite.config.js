// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@types": path.resolve(__dirname, "src/types"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@animations": path.resolve(__dirname, "src/animations"),
        },
    },
});
