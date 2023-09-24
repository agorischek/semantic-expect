import type { ResultMessageDetails } from '../types/results.js';

export const renderVitestMessage = ({
  isNot,
  rule,
  content,
  assessment,
}: ResultMessageDetails) => {
  const message = isNot
    ? `expected '${content}' not to heed '${rule}' (${assessment})`
    : `expected '${content}' to heed '${rule}' (${assessment})`;
  return message;
};
