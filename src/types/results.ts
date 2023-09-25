export type Test = {
  assertion: string;
  content: string;
};

export type Result = {
  pass: boolean;
  message: () => string;
};

export type ResultMessageDetails = {
  name: string;
  isNot?: boolean;
  assertion: string;
  assessment: string;
  content: string;
  pass: boolean;
};
