import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.llm.ts'],
    setupFiles: ['vitest.setup.ts'],
    testTimeout: 15000,
    maxConcurrency: 20,
  },
});
