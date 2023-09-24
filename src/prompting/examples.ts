import { Example } from '../types/examples.js';

export const defaultExamples: Example[] = [
  {
    content: 'I need to pick up bananas and bread.',
    rule: 'Must mention a fruit',
    assessment: 'Mentions bananas',
    pass: true,
  },
  {
    content: 'This is absolutely awful!!',
    rule: 'Must be positive',
    assessment: 'Contains negative sentiment',
    pass: false,
  },
  {
    content: 'Circles, squares, and triangles.',
    rule: 'Must not mention colors',
    assessment: 'Does not mention colors',
    pass: true,
  },
  {
    content: 'Bonjour le monde.',
    rule: 'Must be in English',
    assessment: 'Is in French',
    pass: false,
  },
  {
    content: 'Bonjour le monde.',
    rule: 'Must be in French',
    assessment: 'Is in French',
    pass: true,
  },
  {
    content: "Hello, I'm a programmer. I love TypeScript!",
    rule: 'Must be one sentence',
    assessment: 'Is two sentences',
    pass: false,
  },
  {
    content: 'Unit testing is awesome.',
    rule: 'Must be three sentences',
    assessment: 'Is one sentence',
    pass: false,
  },
  {
    content: 'Yellow',
    rule: 'Must be a color',
    assessment: 'Is a color',
    pass: true,
  },
  {
    content: 'The ball is round',
    rule: 'Must include a shape',
    assessment: 'Includes round',
    pass: true,
  },
  {
    content: 'This is great!',
    rule: 'Must be a color',
    assessment: 'Is not a color',
    pass: false,
  },
  {
    content: 'You did great!',
    rule: 'Must be a compliment',
    assessment: 'Is a compliment',
    pass: true,
  },
  {
    content: 'That was terrible...',
    rule: 'Must be a compliment',
    assessment: 'Is a criticism',
    pass: false,
  },
  {
    content: 'I look up to you',
    rule: 'Must be an expression of admiration',
    assessment: 'Is an expression of admiration',
    pass: true,
  },
  {
    content: 'Ahoy, matey!',
    rule: 'Sound like a pirate',
    assessment: 'Sounds like a pirate',
    pass: true,
  },
  {
    content: 'Beep boop beep boop',
    rule: 'Sound like a human',
    assessment: 'Sounds like a robot',
    pass: false,
  },
  {
    content: 'Bonjour',
    rule: 'Use Spanish',
    assessment: 'Includes "Boujour"',
    pass: false,
  },
  {
    content: 'Quantum entanglement',
    rule: 'Be about biology',
    assessment: 'Is about physics',
    pass: false,
  },
  {
    content: 'Inflation',
    rule: 'Be about economics',
    assessment: 'Mentions inflation',
    pass: true,
  },
  {
    content:
      'I was kind of thinking about maybe some day considering running for major.',
    rule: 'Be consice',
    assessment: 'Is verbose',
    pass: false,
  },
  {
    content: 'A',
    rule: 'Use a full sentence',
    assessment: 'Is only one word',
    pass: false,
  },
  {
    content: 'I went to the store.',
    rule: 'Use a full sentence',
    assessment: 'Is a full sentence',
    pass: true,
  },
  {
    content: 'Purple is a shape',
    rule: 'Be accurate',
    assessment: 'Purple is not a shape',
    pass: false,
  },
  {
    content: 'The sky is blue',
    rule: 'Be accurate',
    assessment: 'The sky is blue',
    pass: true,
  },
  {
    content: 'The sky is blue',
    rule: 'Be inaccurate',
    assessment: 'The sky is blue',
    pass: false,
  },
  {
    content: 'The sun is bright',
    rule: 'Mention the moon',
    assessment: 'Does not mention the moon',
    pass: false,
  },
  {
    content: 'Bananas are yellow',
    rule: 'Mention bananas',
    assessment: 'Mentions bananas',
    pass: true,
  },
  {
    content: 'The water is blue',
    rule: 'Mention the sky',
    assessment: 'Only mentions water',
    pass: false,
  },
  {
    content: 'One, two, three',
    rule: 'Get to four',
    assessment: 'Stops at three',
    pass: false,
  },
  {
    content: 'One, two, three, four, five',
    rule: 'Get to at least four',
    assessment: 'Gets to five',
    pass: true,
  },
  {
    content: "Let's fly to Mars!",
    rule: 'Mention two planets',
    assessment: 'Only mentions one planet',
    pass: false,
  },
  {
    content: 'Bonjour le monde.',
    rule: 'Use Spanish',
    assessment: 'Uses French',
    pass: false,
  },
  {
    content: "Hey what's up?",
    rule: 'Be casual',
    assessment: 'Is casual',
    pass: true,
  },
  {
    content: "Hey what's up?",
    rule: 'Be professional',
    assessment: 'Is casual',
    pass: false,
  },
];