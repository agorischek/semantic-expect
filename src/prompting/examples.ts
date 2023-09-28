import { Example } from '../types/examples.js';

export const defaultExamples: Example[] = [
  {
    content: 'I need to pick up bananas and bread.',
    requirement: 'Content mentioning fruit',
    assessment: 'Mentions bananas',
    pass: true,
  },
  {
    content: 'This is absolutely awful!!',
    requirement: 'Positive sentiment',
    assessment: 'Contains negative sentiment',
    pass: false,
  },
  {
    content: 'Circles, squares, and triangles.',
    requirement: 'No mention of colors',
    assessment: 'Does not mention colors',
    pass: true,
  },
  {
    content: 'Why did the tomato turn red? Because it saw the salad dressing!',
    requirement: 'A joke about furniture',
    assessment: 'Is a joke about food, not furniture',
    pass: false,
  },
  {
    content: 'Hi',
    requirement: 'Bye',
    assessment: 'Does not say "Bye"',
    pass: false,
  },
  // {
  //   content: 'Bonjour le monde.',
  //   requirement: 'be in English',
  //   assessment: 'Is in French',
  //   pass: false,
  // },
  // {
  //   content: 'Bonjour le monde.',
  //   requirement: 'be in French',
  //   assessment: 'Is in French',
  //   pass: true,
  // },
  // {
  //   content: "Hello, I'm a programmer. I love TypeScript!",
  //   requirement: 'be one sentence',
  //   assessment: 'Is two sentences',
  //   pass: false,
  // },
  // {
  //   content: 'Unit testing is awesome.',
  //   requirement: 'be three sentences',
  //   assessment: 'Is one sentence',
  //   pass: false,
  // },
  // {
  //   content: 'Yellow',
  //   requirement: 'be a color',
  //   assessment: 'Is a color',
  //   pass: true,
  // },
  // {
  //   content: 'The ball is round',
  //   requirement: 'include a shape',
  //   assessment: 'Includes round',
  //   pass: true,
  // },
  // {
  //   content: 'This is great!',
  //   requirement: 'be a color',
  //   assessment: 'Is not a color',
  //   pass: false,
  // },
  // {
  //   content: 'You did great!',
  //   requirement: 'be a compliment',
  //   assessment: 'Is a compliment',
  //   pass: true,
  // },
  // {
  //   content: 'That was terrible...',
  //   requirement: 'be a compliment',
  //   assessment: 'Is a criticism',
  //   pass: false,
  // },
  // {
  //   content: 'I look up to you',
  //   requirement: 'be an expression of admiration',
  //   assessment: 'Is an expression of admiration',
  //   pass: true,
  // },
  // {
  //   content: 'Ahoy, matey!',
  //   requirement: 'sound like a pirate',
  //   assessment: 'Sounds like a pirate',
  //   pass: true,
  // },
  // {
  //   content: 'Beep boop beep boop',
  //   requirement: 'sound like a human',
  //   assessment: 'Sounds like a robot',
  //   pass: false,
  // },
  // {
  //   content: 'Bonjour',
  //   requirement: 'use Spanish',
  //   assessment: 'Includes "Boujour"',
  //   pass: false,
  // },
  // {
  //   content: 'Quantum entanglement',
  //   requirement: 'be about biology',
  //   assessment: 'Is about physics',
  //   pass: false,
  // },
  // {
  //   content: 'Inflation',
  //   requirement: 'be about economics',
  //   assessment: 'Mentions inflation',
  //   pass: true,
  // },
  // {
  //   content:
  //     'I was kind of thinking about maybe some day considering running for major.',
  //   requirement: 'be concise',
  //   assessment: 'Is verbose',
  //   pass: false,
  // },
  // {
  //   content: 'A',
  //   requirement: 'use a full sentence',
  //   assessment: 'Is only one word',
  //   pass: false,
  // },
  // {
  //   content: 'I went to the store.',
  //   requirement: 'use a full sentence',
  //   assessment: 'Is a full sentence',
  //   pass: true,
  // },
  // {
  //   content: 'Purple is a shape',
  //   requirement: 'be accurate',
  //   assessment: 'Purple is not a shape',
  //   pass: false,
  // },
  // {
  //   content: 'The sky is blue',
  //   requirement: 'be accurate',
  //   assessment: 'The sky is blue',
  //   pass: true,
  // },
  // {
  //   content: 'The sky is blue',
  //   requirement: 'be inaccurate',
  //   assessment: 'The sky is blue',
  //   pass: false,
  // },
  // {
  //   content: 'The sun is bright',
  //   requirement: 'mention the moon',
  //   assessment: 'Does not mention the moon',
  //   pass: false,
  // },
  // {
  //   content: 'Bananas are yellow',
  //   requirement: 'mention bananas',
  //   assessment: 'Mentions bananas',
  //   pass: true,
  // },
  // {
  //   content: 'The water is blue',
  //   requirement: 'mention the sky',
  //   assessment: 'Only mentions water',
  //   pass: false,
  // },
  // {
  //   content: 'One, two, three',
  //   requirement: 'get to four',
  //   assessment: 'Stops at three',
  //   pass: false,
  // },
  // {
  //   content: 'One, two, three, four, five',
  //   requirement: 'get to at least four',
  //   assessment: 'Gets to five',
  //   pass: true,
  // },
  // {
  //   content: "Let's fly to Mars!",
  //   requirement: 'mention two planets',
  //   assessment: 'Only mentions one planet',
  //   pass: false,
  // },
  // {
  //   content: 'Bonjour le monde.',
  //   requirement: 'use Spanish',
  //   assessment: 'Uses French',
  //   pass: false,
  // },
  // {
  //   content: "Hey what's up?",
  //   requirement: 'be casual',
  //   assessment: 'Is casual',
  //   pass: true,
  // },
  // {
  //   content: "Hey what's up?",
  //   requirement: 'be professional',
  //   assessment: 'Is casual',
  //   pass: false,
  // },
];
