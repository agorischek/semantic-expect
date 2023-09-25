import {
  DIM_COLOR,
  matcherHint,
  printExpected,
  printReceived,
} from 'jest-matcher-utils';

import type { ResultMessageDetails } from '../types/results.js';

export const renderJestMessage = ({
  name,
  isNot,
  assertion,
  content,
  assessment,
}: ResultMessageDetails) => {
  const comment = isNot ? 'Fails if assertion is fulfilled' : undefined;
  const hint = matcherHint(name, undefined, 'assertion', { isNot, comment });

  const expectedLine = `Assertion: ${printExpected(assertion)}`;
  const receivedLine = `Received: ${printReceived(content)} ${DIM_COLOR(
    `// ${assessment}`,
  )}`;

  const assembled = `${hint}\n\n${expectedLine}\n${receivedLine}`;
  return assembled;
};
