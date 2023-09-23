import { OpenAI } from "openai";
import { MatcherHintOptions } from "jest-matcher-utils";

import {
  makeOpenAIChatDeterminer,
  makeOpenAITextDeterminer,
} from "./determiners.js";
import { Determiner, MatchersFactory } from "./types.js";
import { renderJestMessage } from "./messages.js";

export const makeMatchers = (determine: Determiner) => {
  const matchers = {
    toHeed: async function (
      this: MatcherHintOptions,
      recieved: string,
      expected: string
    ) {
      const { isNot } = this;

      const name = "toHeed";

      const content = recieved;
      const rule = expected;

      const { assessment, pass } = await determine({ content, rule });

      const message = () =>
        renderJestMessage({ assessment, pass, rule, content, name, isNot });

      const matcher = { pass, message };
      return matcher;
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
