export type ExampleInput = {
  assertion: string;
  content: string;
};

export type ExampleOutput = {
  assessment: string;
  pass: boolean;
};

export type Example = ExampleInput & ExampleOutput;
