import { Completer } from './completers.js';
import { Test } from './results.js';

/** Parsed, unformatted information from LLM response */
export type Determination = {
  pass: boolean;
  assessment: string;
};

/** The result of one iteration in a matcher that performs multiple iterations */
export type Iteration = {
  index: number;
  pass: boolean;
  assessment: string;
  content: string;
};

export type DeterminationParser = (response: string) => Determination;

export type Determiner = (test: Test) => Promise<Determination>;

export type DeterminerFactory<T> = (completer: Completer<T>) => Determiner;
