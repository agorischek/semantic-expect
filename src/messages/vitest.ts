import type { ResultMessageDetails } from '../types/results.js';

export const renderVitestMessage = ({
  isNot,
  requirement,
  content,
  assessment,
}: ResultMessageDetails) => {
  const message = isNot
    ? `expected '${content}' not to '${requirement}' (${assessment})`
    : `expected '${content}' to '${requirement}' (${assessment})`;
  return message;
};
