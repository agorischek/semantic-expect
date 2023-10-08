import { Iteration } from '../types/determiners.js';
import type { ResultMessageDetails } from '../types/results.js';

export const renderVitestMessage = ({
  isNot,
  requirement,
  iterations,
}: ResultMessageDetails) => {
  const item = (iteration: Iteration) =>
    `  - '${iteration.content}' (${iteration.assessment})`;

  if (isNot) {
    const summary = `expected every generation to not be '${requirement}'`;
    const passes = iterations.filter((iteration) => iteration.pass);
    if (passes.length === 0) {
      return summary;
    } else {
      const parenthetical =
        passes.length === 1
          ? `(1 of ${iterations.length} was)`
          : `(${passes.length} of ${iterations.length} were)`;
      const receivedInfo = `Received:\n${passes.map(item).join('\n')}`;
      const assembled = `${summary} ${parenthetical}\n\n${receivedInfo}`;
      return assembled;
    }
  } else {
    const summary = `expected every generation to be '${requirement}'`;
    const failures = iterations.filter((iteration) => !iteration.pass);
    if (failures.length === 0) {
      return summary;
    } else {
      const parenthetical =
        failures.length === 1
          ? `(1 of ${iterations.length} was not)`
          : `(${failures.length} of ${iterations.length} were not)`;
      const receivedInfo = `Received:\n${failures.map(item).join('\n')}`;
      const assembled = `${summary} ${parenthetical}\n\n${receivedInfo}`;
      return assembled;
    }
  }
};
