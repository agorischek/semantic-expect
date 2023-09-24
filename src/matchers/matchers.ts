import { MatcherHintOptions } from 'jest-matcher-utils';

import { ResultMessageFormat } from '../types/options.js';
import { Determiner } from '../types/determiners.js';
import { renderMessage } from '../messages/message.js';

export const makeMatchers = (
  determine: Determiner,
  format: ResultMessageFormat,
) => {
  const matchers = {
    toHeed: async function (
      this: MatcherHintOptions,
      recieved: string,
      expected: string,
    ) {
      const { isNot } = this;

      const name = 'toHeed';

      const content = recieved;
      const rule = expected;

      const { assessment, pass } = await determine({ content, rule });

      const message = () =>
        renderMessage(format, { assessment, pass, rule, content, name, isNot });

      const matcher = { pass, message };
      return matcher;
    },
  };
  return matchers;
};
