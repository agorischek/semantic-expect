export type Test = {
  requirement: string;
  content: string;
};

export type Result = {
  pass: boolean;
  message: () => string;
};

export type ResultMessageDetails = {
  name: string;
  isNot?: boolean;
  requirement: string;
  assessment: string;
  content: string;
  pass: boolean;
};
