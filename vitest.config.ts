import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // so you dont need to import vitest 
    setupFiles: "tests/setup.ts",
  },
});
