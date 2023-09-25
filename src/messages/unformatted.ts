import type { ResultMessageDetails } from '../types/results.js';

export const renderUnformattedMessage = ({
  isNot,
  requirement,
  content,
  assessment,
}: ResultMessageDetails) => {
  const message = isNot
    ? `'${content}' should not '${requirement}' (${assessment})`
    : `'${content}' should '${requirement}' (${assessment})`;

  return message;
};
