export const cases: Case[] = [
  {
    subject: 'a fruit',
    requirement: 'Content mentioning fruit',
    content: 'I need to pick up bananas and bread.',
    result: true,
    contains: 'bananas',
  },
  {
    subject: 'negative sentiment',
    requirement: 'Positive sentiment',
    content: 'This is absolutely awful!!',
    result: false,
    contains: 'negative sentiment',
  },
];

type Case = {
  subject: string;
  requirement: string;
  content: string;
  result: boolean;
  contains: string | RegExp;
};

type Row = [string, string, string, boolean, string | RegExp];

export const flatten = (cases: Case[]): Row[] =>
  cases.map(({ subject, requirement, content, result, contains }: Case) => [
    subject,
    requirement,
    content,
    result,
    contains,
  ]);
