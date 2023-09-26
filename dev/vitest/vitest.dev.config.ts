import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['dev/vitest/**/*.test.ts'],
    setupFiles: ['vitest.setup.ts'],
    testTimeout: 20000,
  },
});
