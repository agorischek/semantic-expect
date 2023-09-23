export type Example = {
  content: string;
  rule: string;
  pass: boolean;
  explanation: string;
};

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

export type Determiner = (
  rule: string,
  content: string
) => Promise<Determination>;

export type DeterminerFactory<T> = (completer: Completer<T>) => Determiner;

export type Completer<T> = (prompt: T) => Promise<string>;

export type CompleterFactory<T, U> = (model: T) => Completer<U>;

export type OpenAIMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};
