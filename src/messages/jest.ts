import {
  DIM_COLOR,
  matcherHint,
  printExpected,
  printReceived,
} from 'jest-matcher-utils';

import { Iteration } from '../types/determiners.js';
import type {
  DefinitelyResultMessageDetails,
  ResultMessageDetails,
} from '../types/results.js';

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

export const renderJestMessage = ({
  name,
  isNot,
  requirement,
  iterations,
}: ResultMessageDetails) => {
  // const hint = matcherHint(name, undefined, 'requirement', { isNot, comment });
  // const expectedInfo = `Requirement: ${printExpected(requirement)}`;

  // function renderLine(iteration: Iteration) {
  //   const { assessment, content } = iteration;
  //   return `  - ${printReceived(content)} ${DIM_COLOR(`// ${assessment}`)}`;
  // }
  // const receivedInfo = `Received:\n${iterations.map(renderLine).join('\n')}`;
  // // const lines = iterations.map(renderLine).join('\n');
  // const assembled = `${hint}\n\n${expectedInfo}\n${receivedInfo}`;
  // return assembled;

  const item = (iteration: Iteration) =>
    `  - ${printReceived(iteration.content)} ${DIM_COLOR(
      `// ${iteration.assessment}`,
    )}`;

  if (isNot) {
    const passes = iterations.filter((iteration) => iteration.pass);
    const comment = 'Fails if requirement is fulfilled';
    const hint = matcherHint(name, undefined, 'requirement', {
      isNot,
      comment,
    });
    const expectedInfo = `Requirement: ${printExpected(requirement)}`;
    const receivedInfo = `Received:\n${passes.map(item).join('\n')}`;
    const assembled = `${hint}\n\n${expectedInfo}\n${receivedInfo}`;
    return assembled;
  } else {
    const failures = iterations.filter((iteration) => !iteration.pass);
    const hint = matcherHint(name, undefined, 'requirement', {
      isNot,
    });
    const expectedInfo = `Requirement: not ${printExpected(requirement)}`;
    const receivedInfo = `Received:\n${failures.map(item).join('\n')}`;
    const assembled = `${hint}\n\n${expectedInfo}\n${receivedInfo}`;
    return assembled;
  }

  const message = isNot
    ? `'Content should not '${requirement}':\n${iterations
        .filter((iteration) => iteration.pass)
        .map((iteration) => item(iteration))
        .join('\n')}`
    : `Content should '${requirement}':\n${iterations
        .filter((iteration) => !iteration.pass)
        .map((iteration) => item(iteration))
        .join('\n')}`;

  return message;
};
