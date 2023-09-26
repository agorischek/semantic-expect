import { Iteration } from '../types/determiners.js';
import type {
  ConsistentlyResultMessageDetails,
  DefinitelyResultMessageDetails,
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

  const message = isNot
    ? `'Generations should not '${requirement}':\n${iterations
        .filter((iteration) => iteration.pass)
        .map((iteration) => item(iteration))
        .join('\n')}`
    : `Generations should '${requirement}':\n${iterations
        .filter((iteration) => !iteration.pass)
        .map((iteration) => item(iteration))
        .join('\n')}`;

  return message;
};
