import { OpenAI } from "openai";

import { makeOpenAIChatDeterminer } from "../determiners/openAIChat.js";
import { makeOpenAITextDeterminer } from "../determiners/openAIText.js";
import { MatchersFactory } from "../types/matchers.js";
import { makeMatchers } from "./matchers.js";

export const makeOpenAIChatMatchers: MatchersFactory<OpenAI> = (
  openai,
  options = {}
) => {
  const determine = makeOpenAIChatDeterminer(openai, options);
  const matchers = makeMatchers(determine, options.format);
  return matchers;
};

export const makeOpenAITextMatchers: MatchersFactory<OpenAI> = (
  openai,
  options = {}
) => {
  const determine = makeOpenAITextDeterminer(openai, options);
  const matchers = makeMatchers(determine, options.format);
  return matchers;
};

export const makeOpenAIMatchers = makeOpenAIChatMatchers;
