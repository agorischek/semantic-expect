import { Options } from '../index.js';
import { Result } from './results.js';

export type Matcher = (received: string, expected: string) => Promise<Result>;

export type Matchers = {
  toDefinitely: Matcher;
};

export type MatchersFactory<T> = (generator: T, options?: Options) => Matchers;

export const enum MatcherName {
  Definitely = 'toDefinitely',
  Consistently = 'toConsistently',
}
