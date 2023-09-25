import { describe, expect, it } from 'vitest';

import { renderMessage } from '../message.js';

describe('Vitest message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderMessage('vitest', {
      content: 'Hello World',
      assertion: 'use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toDefinitely',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' to 'use English' (Uses English)\"",
    );
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('vitest', {
      content: 'Hello World',
      assertion: 'use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toDefinitely',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' to 'use Spanish' (Uses English)\"",
    );
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderMessage('vitest', {
      content: 'Hello World',
      assertion: 'use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toDefinitely',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' not to 'use English' (Uses English)\"",
    );
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('vitest', {
      content: 'Hello World',
      assertion: 'use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toDefinitely',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' not to 'use Spanish' (Uses English)\"",
    );
  });
});
