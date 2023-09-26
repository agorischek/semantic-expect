import stripAnsi from 'strip-ansi';
import { describe, expect, it } from 'vitest';

import { MatcherName } from '../../types/matchers.js';
import { renderDefinitelyMessage } from '../message.js';

describe('Jest message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderDefinitelyMessage('jest', {
      content: 'Hello World',
      requirement: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toDefinitely',
      isNot: false,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).toDefinitely(requirement)

      Requirement: \\"Use English\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });

  it('Should render a message for a failed test', async () => {
    const message = renderDefinitelyMessage('jest', {
      content: 'Hello World',
      requirement: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toDefinitely',
      isNot: false,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).toDefinitely(requirement)

      Requirement: \\"Use Spanish\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderDefinitelyMessage('jest', {
      content: 'Hello World',
      requirement: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toDefinitely',
      isNot: true,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).not.toDefinitely(requirement) // Fails if requirement is fulfilled

      Requirement: \\"Use English\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });

  it('Should render a message for a failed test', async () => {
    const message = renderDefinitelyMessage('jest', {
      content: 'Hello World',
      requirement: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: MatcherName.Definitely,
      isNot: true,
    });
    const plain = stripAnsi(message);
    expect(plain).toMatchInlineSnapshot(`
      "expect(received).not.toDefinitely(requirement) // Fails if requirement is fulfilled

      Requirement: \\"Use Spanish\\"
      Received: \\"Hello World\\" // Uses English"
    `);
  });
});
