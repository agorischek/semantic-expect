import { defaultInstructions } from '../prompting/instructions.js';

export function renderInstructions(): string {
  const rendered = `Instructions: ${defaultInstructions}`;
  return rendered;
}
