import { Options } from "../index.js";
import { Result } from "../types.js";

export type Matcher = (recieved: string, expected: string) => Promise<Result>;

export type Matchers = {
  toHeed: Matcher;
};

export type MatchersFactory<T> = (generator: T, options?: Options) => Matchers;
