import { expect, it, describe } from 'vitest';

import stripAnsi from 'strip-ansi';

import { renderMessage } from '../message.js';

describe('Jest message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      rule: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toHeed',
      isNot: false,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).toHeed(rule)

      Rule: \\"Use English\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      rule: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toHeed',
      isNot: false,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).toHeed(rule)

      Rule: \\"Use Spanish\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      rule: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toHeed',
      isNot: true,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).not.toHeed(rule) // Fails if rule is followed

      Rule: \\"Use English\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      rule: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toHeed',
      isNot: true,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).not.toHeed(rule) // Fails if rule is followed

      Rule: \\"Use Spanish\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });
});
