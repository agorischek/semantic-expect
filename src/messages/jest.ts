import {
  matcherHint,
  printExpected,
  printReceived,
  DIM_COLOR,
} from "jest-matcher-utils";

import { ResultMessageDetails } from "../types/results.js";

export const renderJestMessage = ({
  name,
  isNot,
  rule,
  content,
  assessment,
}: ResultMessageDetails) => {
  const comment = isNot ? "Fails if rule is followed" : undefined;
  const hint = matcherHint(name, undefined, "rule", { isNot, comment });

  const expectedLine = `Rule: ${printExpected(rule)}`;
  const receivedLine = `Received: ${printReceived(content)} ${DIM_COLOR(
    `// ${assessment}`
  )}`;

  const assembled = `${hint}\n\n${expectedLine}\n${receivedLine}`;
  return assembled;
};
