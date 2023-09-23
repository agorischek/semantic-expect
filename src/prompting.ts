import { Example } from "./types.js";

export const instructions =
  "You accept content and a rule. You provide an assessment of whether the content passes the rule, then indicate that Pass is either `true` (passes) or `false` (fails).";

export const examples: Example[] = [
  {
    content: "I need to pick up bananas and bread.",
    rule: "Must mention a fruit",
    assessment: "Mentions bananas",
    pass: true,
  },
  {
    content: "This is absolutely awful!!",
    rule: "Must be positive",
    assessment: "Contains negative sentiment",
    pass: false,
  },
  {
    content: "Circles, squares, and triangles.",
    rule: "Must not mention colors",
    assessment: "Does not mention colors",
    pass: true,
  },
  {
    content: "Bonjour le monde.",
    rule: "Must be in English",
    assessment: "Is in French",
    pass: false,
  },
  {
    content: "Bonjour le monde.",
    rule: "Must be in French",
    assessment: "Is in French",
    pass: true,
  },
  {
    content: "Hello, I'm a programmer. I love TypeScript!",
    rule: "Must be one sentence",
    assessment: "Is two sentences",
    pass: false,
  },
  {
    content: "Unit testing is awesome.",
    rule: "Must be three sentences",
    assessment: "Is one sentence",
    pass: false,
  },
  {
    content: "Yellow",
    rule: "Must be a color",
    assessment: "Is a color",
    pass: true,
  },
  {
    content: "The ball is round",
    rule: "Must include a shape",
    assessment: "Includes round",
    pass: true,
  },
  {
    content: "This is great!",
    rule: "Must be a color",
    assessment: "Is not a color",
    pass: false,
  },
  {
    content: "You did great!",
    rule: "Must be a compliment",
    assessment: "Is a compliment",
    pass: true,
  },
  {
    content: "That was terrible...",
    rule: "Must be a compliment",
    assessment: "Is a criticism",
    pass: false,
  },
  {
    content: "I look up to you",
    rule: "Must be an expression of admiration",
    assessment: "Is an expression of admiration",
    pass: true,
  },
];
