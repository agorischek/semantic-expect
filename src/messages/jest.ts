import {
  DIM_COLOR,
  matcherHint,
  printExpected,
  printReceived,
} from 'jest-matcher-utils';

import { Iteration } from '../types/determiners.js';
import type { ResultMessageDetails } from '../types/results.js';

export const renderJestMessage = ({
  name,
  isNot,
  requirement,
  iterations,
}: ResultMessageDetails) => {
  const item = (iteration: Iteration) =>
    `  - ${printReceived(iteration.content)} ${DIM_COLOR(
      `// ${iteration.assessment}`,
    )}`;

  if (isNot) {
    const hint = matcherHint(name, undefined, 'requirement', { isNot });
    const expectedInfo = `Expected: not ${printExpected(requirement)}`;
    const passes = iterations.filter((iteration) => iteration.pass);
    if (passes.length === 0) {
      const assembled = `${hint}\n\n${expectedInfo}`;
      return assembled;
    } else {
      const receivedInfo = `Received:\n${passes.map(item).join('\n')}`;
      const assembled = `${hint}\n\n${expectedInfo}\n${receivedInfo}`;
      return assembled;
    }
  } else {
    const hint = matcherHint(name, undefined, 'requirement', { isNot });
    const expectedInfo = `Expected: ${printExpected(requirement)}`;
    const failures = iterations.filter((iteration) => !iteration.pass);
    if (failures.length === 0) {
      const assembled = `${hint}\n\n${expectedInfo}`;
      return assembled;
    } else {
      const receivedInfo = `Received:\n${failures.map(item).join('\n')}`;
      const assembled = `${hint}\n\n${expectedInfo}\n${receivedInfo}`;
      return assembled;
    }
  }
};
