import { MatcherHintOptions } from 'jest-matcher-utils';

import {
  renderConsistentlyMessage,
  renderDefinitelyMessage,
} from '../messages/message.js';
import { Determiner } from '../types/determiners.js';
import { Generator } from '../types/generation.js';
import { MatcherName } from '../types/matchers.js';
import { ResultMessageFormat } from '../types/options.js';

export const makeMatchers = (
  determine: Determiner,
  format: ResultMessageFormat,
) => {
  const matchers = {
    toDefinitely: async function (
      this: MatcherHintOptions,
      received: string,
      expected: string,
    ) {
      const name = MatcherName.Definitely;
      const content = received;
      const requirement = expected;
      const { isNot } = this;
      const { assessment, pass } = await determine({ content, requirement });
      const details = { content, requirement, assessment, isNot, name, pass };
      const message = () => renderDefinitelyMessage(format, details);
      const result = { pass, message };
      return result;
    },
    toConsistently: async function (
      this: MatcherHintOptions,
      received: Generator,
      expected: string,
      count?: number,
    ) {
      const name = MatcherName.Consistently;
      const generator = received;
      const requirement = expected;
      const { isNot } = this;
      const generations = await Promise.all(
        Array.from({ length: count }, () => generator()),
      );
      const determinations = await Promise.all(
        generations.map((content) => determine({ content, requirement })),
      );
      const iterations = determinations.map(({ assessment, pass }, index) => {
        return { content: generations[index], assessment, pass, index };
      });
      const details = { iterations, requirement, isNot, name };
      const message = () => renderConsistentlyMessage(format, details);
      const pass = iterations.filter(({ pass }) => !pass).length === 0;
      const result = { pass, message };
      return result;
    },
  };
  return matchers;
};
