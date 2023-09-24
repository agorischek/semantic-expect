import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/dev/**',
      '**/*.llm.test.ts',
    ],
    coverage: {
      provider: 'v8',
    },
  },
});
