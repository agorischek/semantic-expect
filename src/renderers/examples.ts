import { defaultExamples } from '../prompting/examples.js';
import { Example } from '../types/examples.js';
import { renderInput } from './input.js';
import { renderOutput } from './output.js';

export function renderExample(example: Example): string {
  const rendered = `${renderInput(example)}\n${renderOutput(example)}\n`;
  return rendered;
}

export function renderExamples(examples: Example[]): string {
  const rendered = examples.reduce((acc, example) => {
    acc = `${acc}\n${renderExample(example)}`;
    return acc;
  }, '');
  return rendered;
}

export function buildExamples(additionalExamples?: Example[]): Example[] {
  const examples = additionalExamples
    ? [...defaultExamples, ...additionalExamples]
    : defaultExamples;
  return examples;
}
