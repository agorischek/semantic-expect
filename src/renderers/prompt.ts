import { Example } from '../types/examples.js';
import { buildExamples, renderExamples } from './examples.js';
import { renderInput } from './input.js';
import { renderInstructions } from './instructions.js';

export function renderPrompt(details: {
  rule: string;
  content: string;
  additionalExamples?: Example[];
}): string {
  const examples = buildExamples(details.additionalExamples);
  const prompt = `${renderInstructions()}\n${renderExamples(
    examples,
  )}\n${renderInput({
    rule: details.rule,
    content: details.content,
  })}`;
  console.log(prompt);
  return prompt;
}
