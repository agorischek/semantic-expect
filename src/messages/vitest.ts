import type { DefinitelyResultMessageDetails } from '../types/results.js';

export const renderDefinitelyVitestMessage = ({
  isNot,
  requirement,
  content,
  assessment,
}: DefinitelyResultMessageDetails) => {
  const message = isNot
    ? `expected '${content}' not to '${requirement}' (${assessment})`
    : `expected '${content}' to '${requirement}' (${assessment})`;
  return message;
};
