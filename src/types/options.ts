import { Example } from './examples.js';

export type ResultMessageFormat = 'jest' | 'unformatted' | 'vitest';

export type Options = {
  examples?: Example[];
  model?: string;
  format?: ResultMessageFormat;
};
