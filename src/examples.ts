import { Example } from "./types.js";

export const examples: Example[] = [
  {
    content: "I need to pick up bananas and bread.",
    rule: "Must mention a fruit.",
    pass: true,
    explanation: "Mentions bananas",
  },
  {
    content: "This is absolutely awful!!",
    rule: "Must be positive.",
    pass: false,
    explanation: "Contains negative sentiment",
  },
];
