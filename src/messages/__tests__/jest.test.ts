import stripAnsi from 'strip-ansi';
import { describe, expect, it } from 'vitest';

import { renderMessage } from '../message.js';

describe('Jest message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      assertion: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toDefinitely',
      isNot: false,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).toDefinitely(rule)

      assertion: \\"Use English\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      assertion: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toDefinitely',
      isNot: false,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).toDefinitely(rule)

      assertion: \\"Use Spanish\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      assertion: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toDefinitely',
      isNot: true,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).not.toDefinitely(rule) // Fails if rule is followed

      assertion: \\"Use English\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('jest', {
      content: 'Hello World',
      assertion: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toDefinitely',
      isNot: true,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).not.toDefinitely(rule) // Fails if rule is followed

      assertion: \\"Use Spanish\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });
});
