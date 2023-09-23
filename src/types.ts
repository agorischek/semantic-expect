export type Test = {
  rule: string;
  content: string;
};

export type ExampleInput = {
  rule: string;
  content: string;
};

export type ExampleOutput = {
  assessment: string;
  pass: boolean;
};

export type Example = ExampleInput & ExampleOutput;

export type Result = {
  pass: boolean;
  message: () => string;
};

/** Parsed, unformatted information from LLM response */
export type Determination = {
  pass: boolean;
  message: string;
};

export type DeterminationParser = (response: string) => Determination;

export type Determiner = (test: Test) => Promise<Determination>;

export type DeterminerFactory<T> = (completer: Completer<T>) => Determiner;

export type Completer<T> = (prompt: T) => Promise<string>;

export type CompleterFactory<T, U> = (
  model: T,
  options?: Options
) => Completer<U>;

export type OpenAIMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type Matcher = (recieved: string, expected: string) => Promise<Result>;

export type Matchers = {
  toHeed: Matcher;
};

export type MatchersFactory<T> = (generator: T, options?: Options) => Matchers;

export type Options = {
  examples?: Example[];
  model?: string;
};
