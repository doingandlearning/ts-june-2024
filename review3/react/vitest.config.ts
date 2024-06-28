// vitest.config.js or vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Use jsdom environment
    environment: "jsdom",
  },
});
