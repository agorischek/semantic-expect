import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/dev/**',
      '**/*.llm.test.ts',
    ],
    setupFiles: ['vitest.setup.ts'],
    coverage: {
      provider: 'v8',
    },
  },
});