import {
  matcherHint,
  printExpected,
  printReceived,
  DIM_COLOR,
} from "jest-matcher-utils";

import { MessageDetails } from "./types.js";

export const renderJestMessage = ({
  name,
  isNot,
  rule,
  content,
  assessment,
}: MessageDetails) => {
  const comment = isNot ? "Fails if rule is followed" : undefined;
  const hint = matcherHint(name, undefined, "rule", { isNot, comment });

  const expectedLine = `Rule: ${printExpected(rule)}`;
  const receivedLine = `Received: ${printReceived(content)} ${DIM_COLOR(
    `// ${assessment}`
  )}`;

  const assembled = `${hint}\n\n${expectedLine}\n${receivedLine}`;
  return assembled;
};
