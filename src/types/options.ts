import { Example } from './examples.js';

export type Format = 'jest';

export type Options = {
  examples?: Example[];
  model?: string;
  format?: Format;
};
