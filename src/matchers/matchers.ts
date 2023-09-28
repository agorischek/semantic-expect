import { MatcherHintOptions } from 'jest-matcher-utils';

import { generationIterationCount } from '../defaults/count.js';
import { renderMessage } from '../messages/message.js';
import { Determiner } from '../types/determiners.js';
import { Generator } from '../types/generation.js';
import { MatcherName } from '../types/matchers.js';
import { ResultMessageFormat } from '../types/options.js';
import {
  determineMultiple,
  generateMultiple,
  mapDeterminations,
  resolvePass,
} from './logic.js';

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
      const name = MatcherName.Generate;
      const generator = received;
      const requirement = expected;
      const { isNot } = this;
      const generations = await generateMultiple(generator, count);
      const determinations = await determineMultiple(
        requirement,
        generations,
        determine,
      );
      const iterations = mapDeterminations(determinations, generations);
      const details = { iterations, requirement, isNot, name };
      const message = () => renderMessage(format, details);
      const pass = resolvePass(isNot, iterations);
      const result = { pass, message };
      return result;
    },
  };
  return matchers;
};
