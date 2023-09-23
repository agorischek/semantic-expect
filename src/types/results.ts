export type Test = {
  rule: string;
  content: string;
};

export type Result = {
  pass: boolean;
  message: () => string;
};

export type ResultMessageDetails = {
  name: string;
  isNot?: boolean;
  rule: string;
  assessment: string;
  content: string;
  pass: boolean;
};
