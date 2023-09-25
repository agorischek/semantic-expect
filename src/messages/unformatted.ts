import type { ResultMessageDetails } from '../types/results.js';

export const renderUnformattedMessage = ({
  isNot,
  assertion,
  content,
  assessment,
}: ResultMessageDetails) => {
  const message = isNot
    ? `'${content}' should not '${assertion}' (${assessment})`
    : `'${content}' should '${assertion}' (${assessment})`;

  return message;
};
