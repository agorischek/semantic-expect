import type { ResultMessageDetails } from '../types/results.js';

export const renderVitestMessage = ({
  isNot,
  assertion,
  content,
  assessment,
}: ResultMessageDetails) => {
  const message = isNot
    ? `expected '${content}' not to '${assertion}' (${assessment})`
    : `expected '${content}' to '${assertion}' (${assessment})`;
  return message;
};
