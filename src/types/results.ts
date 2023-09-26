import { Iteration } from './determiners.js';

export type Test = {
  requirement: string;
  content: string;
};

export type Result = {
  pass: boolean;
  message: () => string;
};

export type DefinitelyResultMessageDetails = {
  name: string;
  isNot?: boolean;
  requirement: string;
  assessment: string;
  content: string;
  pass: boolean;
};

export type ConsistentlyResultMessageDetails = {
  name: string;
  isNot?: boolean;
  requirement: string;
  iterations: Iteration[];
};

export type ResultMessageDetails = {
  name: string;
  isNot?: boolean;
  requirement: string;
  iterations: Iteration[];
};
