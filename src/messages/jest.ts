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
  const comment = isNot ? 'Fails if rule is followed' : undefined;
  const hint = matcherHint(name, undefined, 'rule', { isNot, comment });

  const expectedLine = `assertion: ${printExpected(assertion)}`;
  const receivedLine = `Received: ${printReceived(content)} ${DIM_COLOR(
    `// ${assessment}`,
  )}`;

  const assembled = `${hint}\n\n${expectedLine}\n${receivedLine}`;
  return assembled;
};
