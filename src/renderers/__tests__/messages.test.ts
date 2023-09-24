import { describe, expect, it } from 'vitest';
import { renderMessages } from '../messages.js';

describe('Message rendering', () => {
  it('Should render messages', () => {
    const details = {
      rule: 'Use French',
      content: 'Bonjour',
      additionalExamples: [
        {
          rule: 'Use Spanish',
          content: 'Hola',
          assessment: 'Uses Spanish',
          pass: true,
        },
      ],
    };
    const messages = renderMessages(details);
    expect(messages[0].role).toBe('system');
    expect(messages[1].role).toBe('user');
    expect(messages[2].role).toBe('assistant');
  });
});
