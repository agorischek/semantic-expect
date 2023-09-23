import { OpenAI } from "openai";

import {
  makeOpenAIChatDeterminer,
  makeOpenAITextDeterminer,
} from "./determiners.js";
import { Determiner, MatchersFactory } from "./types.js";
import {
  MatcherHintOptions,
  matcherErrorMessage,
  matcherHint,
  printExpected,
  printReceived,
  DIM_COLOR,
} from "jest-matcher-utils";

export const makeMatchers = (determine: Determiner) => {
  const matchers = {
    toHeed: async function (
      this: MatcherHintOptions,
      recieved: string,
      expected: string
    ) {
      const content = recieved;
      const rule = expected;

      const determination = await determine({ content, rule });

      const message = () => {
        const hint = matcherHint("toHeed", undefined, "rule", {
          isNot: this.isNot,
        });
        const assembled = `${hint}\n\nRule: ${printExpected(
          rule
        )}\nReceived: ${printReceived(content)} ${DIM_COLOR(
          `// ${determination.assessment}`
        )}`;
        return assembled;
      };

      const matcher = {
        pass: determination.pass,
        message,
      };
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
