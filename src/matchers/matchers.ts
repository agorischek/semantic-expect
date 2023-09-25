import { MatcherHintOptions } from 'jest-matcher-utils';

import { renderMessage } from '../messages/message.js';
import { Determiner } from '../types/determiners.js';
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
      const name = 'toDefinitely';
      const content = received;
      const requirement = expected;
      const { isNot } = this;
      const { assessment, pass } = await determine({ content, requirement });
      const details = { content, requirement, assessment, isNot, name, pass };
      const message = () => renderMessage(format, details);
      const result = { pass, message };
      return result;
    },
  };
  return matchers;
};
