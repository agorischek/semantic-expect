import OpenAI from "openai";
import {
  makeOpenAIChatDeterminer,
  makeOpenAITextDeterminer,
} from "./determiners.js";
import { Determiner, MatchersFactory } from "./types.js";

export const makeMatchers = (determine: Determiner) => {
  const matchers = {
    toHeed: async (recieved: string, expected: string) => {
      const determination = await determine(recieved, expected);
      return {
        pass: determination.pass,
        message: () => determination.message,
      };
    },
  };
  return matchers;
};

export const makeOpenAIChatMatchers: MatchersFactory<OpenAI> = (
  openai,
  options = {}
) => {
  const determine = makeOpenAIChatDeterminer(openai, options);
  const matchers = makeMatchers(determine);
  return matchers;
};

export const makeOpenAITextMatchers: MatchersFactory<OpenAI> = (
  openai,
  options = {}
) => {
  const determine = makeOpenAITextDeterminer(openai, options);
  const matchers = makeMatchers(determine);
  return matchers;
};

export const makeOpenAIMatchers = makeOpenAIChatMatchers;
