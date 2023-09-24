import { expect, it, describe } from 'vitest';

import { renderMessage } from '../message.js';

describe('Unformatted message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderMessage('unformatted', {
      content: 'Hello World',
      rule: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toHeed',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot('"\'Hello World\' should heed rule \'Use English\' (Uses English)"');
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('unformatted', {
      content: 'Hello World',
      rule: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toHeed',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot('"\'Hello World\' should heed rule \'Use Spanish\' (Uses English)"');
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderMessage('unformatted', {
      content: 'Hello World',
      rule: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toHeed',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot('"\'Hello World\' should not heed rule \'Use English\' (Uses English)"');
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('unformatted', {
      content: 'Hello World',
      rule: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toHeed',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot('"\'Hello World\' should not heed rule \'Use Spanish\' (Uses English)"');
  });
});
