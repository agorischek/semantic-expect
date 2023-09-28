import { Options } from '../index.js';
import { Generator } from './generation.js';
import { Result } from './results.js';

export type ToGenerateMatcher = (
  received: Generator,
  expected: string,
  count?: number,
) => Promise<Result>;

export type Matchers = {
  toGenerate: ToGenerateMatcher;
};

export type MatchersFactory<T> = (backend: T, options?: Options) => Matchers;

export const enum MatcherName {
  Generate = 'toGenerate',
}
