import {
  DIM_COLOR,
  EXPECTED_COLOR,
  MatcherHintOptions,
  RECEIVED_COLOR,
  SUGGEST_TO_CONTAIN_EQUAL,
  ensureExpectedIsNonNegativeInteger,
  ensureNoExpected,
  ensureNumbers,
  getLabelPrinter,
  matcherErrorMessage,
  matcherHint,
  printDiffOrStringify,
  printExpected,
  printReceived,
  printWithType,
  stringify,
} from "jest-matcher-utils";

const matcherName = "toHeed";
// const options: MatcherHintOptions = {
//     comment: 'Object.is equality',
//     isNot: this.isNot,
//   };

const hint = matcherHint(matcherName, undefined, "rule");
const rule = "Be nice";
const received = "You look nice today";
const message = `${hint}\n\nRule: ${printExpected(
  rule
)}\nReceived: ${printReceived(received)}`;
console.log(message);

//     // eslint-disable-next-line prefer-template
//     matcherHint(matcherName, undefined, undefined, options) +
//     '\n\n' +
//     (deepEqualityName === null
//       ? ''
//       : `${DIM_COLOR(
//           `If it should pass with deep equality, replace "${matcherName}" with "${deepEqualityName}"`,
//         )}\n\n`) +
//     printDiffOrStringify(
//       expected,
//       received,
//       EXPECTED_LABEL,
//       RECEIVED_LABEL,
//       isExpand(this.expand),
//     )
//   );
