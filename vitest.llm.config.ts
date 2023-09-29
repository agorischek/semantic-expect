import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.llm.test.ts'],
    setupFiles: ['vitest.setup.ts'],
    testTimeout: 15000,
  },
});
