import { Test } from '../types.js';
import { Completer } from './completers.js';

/** Parsed, unformatted information from LLM response */
export type Determination = {
  pass: boolean;
  assessment: string;
};

export type DeterminationParser = (response: string) => Determination;

export type Determiner = (test: Test) => Promise<Determination>;

export type DeterminerFactory<T> = (completer: Completer<T>) => Determiner;
