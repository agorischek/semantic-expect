import { Iteration } from '../types/determiners.js';
import type { ResultMessageDetails } from '../types/results.js';

export const renderUnformattedMessage = ({
  isNot,
  requirement,
  iterations,
}: ResultMessageDetails) => {
  const item = (iteration: Iteration) =>
    `  - '${iteration.content}' (${iteration.assessment})`;

  if (isNot) {
    const summary = `Content should not be '${requirement}'`;
    const passes = iterations.filter((iteration) => iteration.pass);
    if (passes.length === 0) {
      return summary;
    } else {
      const receivedInfo = `Received:\n${passes.map(item).join('\n')}`;
      const assembled = `${summary}\n\n${receivedInfo}`;
      return assembled;
    }
  } else {
    const summary = `Content should be '${requirement}'`;
    const failures = iterations.filter((iteration) => !iteration.pass);
    if (failures.length === 0) {
      return summary;
    } else {
      const receivedInfo = `Received:\n${failures.map(item).join('\n')}`;
      const assembled = `${summary}\n\n${receivedInfo}`;
      return assembled;
    }
  }
};
