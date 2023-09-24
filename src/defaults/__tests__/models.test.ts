import { describe, expect, it } from 'vitest';

import { models } from '../models.js';

describe('models', () => {
  it('should use GPT 3.5 Turbo for chat', () => {
    expect(models.openAIChat).toMatch('gpt-3.5-turbo');
  });

  it('should use GPT 3.5 Turbo Instruct for text', () => {
    expect(models.openAIText).toMatch('gpt-3.5-turbo-instruct');
  });
});
