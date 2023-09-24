import type { ResultMessageDetails } from '../types/results.js';

export const renderUnformattedMessage = ({
  isNot,
  rule,
  content,
  assessment,
}: ResultMessageDetails) => {
  const message = isNot
    ? `Content "${content}" should heed rule "${rule}" (${assessment})`
    : `Content "${content}" should not heed rule ${rule} (${assessment})`;

  return message;
};
