import js from '@eslint/js';
import markdown from '@eslint/markdown';
import prettier from 'eslint-config-prettier/flat';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['dist/**', 'vitest.d.ts'],
  },
  {
    files: ['**/*.{js,cjs,mjs,ts,cts,mts}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    extends: ['markdown/processor'],
  },
  {
    files: ['**/*.md/**/*.{js,cjs,mjs,ts,cts,mts}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
    },
  },
  prettier,
]);
