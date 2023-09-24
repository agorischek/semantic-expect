import { Example } from './examples.js';

export type ResultMessageFormat = 'jest' | 'unformatted';

export type Options = {
  examples?: Example[];
  model?: string;
  format?: ResultMessageFormat;
};
