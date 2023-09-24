import { describe, expect, it } from 'vitest';
import { renderPrompt } from '../prompt.js';

describe('prompt renderers', () => {
  it('renders a prompt', () => {
    const prompt = renderPrompt({ rule: 'Must be a color', content: 'Red' });
    expect(prompt).toMatch('You **must** follow these instructions');
  });
});
