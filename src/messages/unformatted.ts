import { Iteration } from '../types/determiners.js';
import type {
  ConsistentlyResultMessageDetails,
  DefinitelyResultMessageDetails,
  ResultMessageDetails,
} from '../types/results.js';

export const renderDefinitelyUnformattedMessage = ({
  isNot,
  requirement,
  content,
  assessment,
}: DefinitelyResultMessageDetails) => {
  const message = isNot
    ? `'${content}' should not '${requirement}' (${assessment})`
    : `'${content}' should '${requirement}' (${assessment})`;

  return message;
};

export const renderConsistentlyUnformattedMessage = ({
  isNot,
  requirement,
  iterations,
}: ConsistentlyResultMessageDetails) => {
  const item = (iteration: Iteration) =>
    `  - '${iteration.content}' (${iteration.assessment})`;

  if (isNot) {
    const passes = iterations.filter((iteration) => iteration.pass);
    const summary = `${passes.length} of ${iterations.length} were`;
    const list = passes.map((iteration) => item(iteration)).join('\n');
    const message = `'Each generation should not be '${requirement}' (${summary}):\n${list}`;
    return message;
  } else {
    const failures = iterations.filter((iteration) => !iteration.pass);
    const summary = `${failures.length} of ${iterations.length} were not`;
    const list = failures.map((iteration) => item(iteration)).join('\n');
    const message = `'Each generation should be '${requirement}' (${summary}):\n${list}`;
    return message;
  }
};

export const renderUnformattedMessage = ({
  isNot,
  requirement,
  iterations,
}: ResultMessageDetails) => {
  const item = (iteration: Iteration) =>
    `  - '${iteration.content}' (${iteration.assessment})`;

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
