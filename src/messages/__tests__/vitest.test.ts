import { describe, expect, it } from 'vitest';

import { renderMessage } from '../message.js';

describe('Vitest message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderMessage('vitest', {
      content: 'Hello World',
      rule: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toHeed',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' to heed 'Use English' (Uses English)\"",
    );
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('vitest', {
      content: 'Hello World',
      rule: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toHeed',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' to heed 'Use Spanish' (Uses English)\"",
    );
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderMessage('vitest', {
      content: 'Hello World',
      rule: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toHeed',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World not to heed 'Use English' (Uses English)\"",
    );
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('vitest', {
      content: 'Hello World',
      rule: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toHeed',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World not to heed 'Use Spanish' (Uses English)\"",
    );
  });
});
