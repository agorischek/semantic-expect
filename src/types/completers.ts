import { Options } from "./options.js";

export type Completer<T> = (prompt: T) => Promise<string>;

export type CompleterFactory<T, U> = (
  model: T,
  options?: Options
) => Completer<U>;
