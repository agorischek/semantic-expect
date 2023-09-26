import { MatcherHintOptions } from 'jest-matcher-utils';

import { generationIterationCount } from '../constants.ts/count.js';
import { renderConsistentlyMessage } from '../messages/message.js';
import { Determiner } from '../types/determiners.js';
import { Generator } from '../types/generation.js';
import { MatcherName } from '../types/matchers.js';
import { ResultMessageFormat } from '../types/options.js';

export const makeMatchers = (
  determine: Determiner,
  format: ResultMessageFormat,
) => {
  const matchers = {
    toGenerate: async function (
      this: MatcherHintOptions,
      received: Generator,
      expected: string,
      count: number = generationIterationCount,
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
      console.log(iterations);
      const details = { iterations, requirement, isNot, name };
      const message = () => renderConsistentlyMessage(format, details);
      const pass = isNot
        ? iterations.filter(({ pass }) => pass).length > 0
        : iterations.filter(({ pass }) => !pass).length === 0;
      const result = { pass, message };
      return result;
    },
  };
  return matchers;
};
