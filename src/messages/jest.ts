import {
  DIM_COLOR,
  matcherHint,
  printExpected,
  printReceived,
} from 'jest-matcher-utils';

import type { DefinitelyResultMessageDetails } from '../types/results.js';

export const renderDefinitelyJestMessage = ({
  name,
  isNot,
  requirement,
  content,
  assessment,
}: DefinitelyResultMessageDetails) => {
  const comment = isNot ? 'Fails if requirement is fulfilled' : undefined;
  const hint = matcherHint(name, undefined, 'requirement', { isNot, comment });

  const expectedLine = `Requirement: ${printExpected(requirement)}`;
  const receivedLine = `Received: ${printReceived(content)} ${DIM_COLOR(
    `// ${assessment}`,
  )}`;

  const assembled = `${hint}\n\n${expectedLine}\n${receivedLine}`;
  return assembled;
};
