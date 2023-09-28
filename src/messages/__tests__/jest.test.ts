import stripAnsi from 'strip-ansi';
import { describe, expect, it } from 'vitest';

import { MatcherName } from '../../types/matchers.js';
import { renderMessage } from '../message.js';

describe('Unformatted message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderMessage('jest', {
      requirement: 'A fruit',
      name: MatcherName.Generate,
      isNot: false,
      iterations: [
        { content: 'Apple', assessment: 'A fruit', pass: true, index: 0 },
        { content: 'Banana', assessment: 'A fruit', pass: true, index: 1 },
        { content: 'Cherry', assessment: 'A fruit', pass: true, index: 2 },
      ],
    });
    expect(stripAnsi(message)).toMatchInlineSnapshot(`
      "expect(received).toGenerate(requirement)

      Expected: \\"A fruit\\""
    `);
  });

  it('Should render a message for a failed test', async () => {
    const message = renderMessage('jest', {
      requirement: 'A fruit',
      name: MatcherName.Generate,
      isNot: false,
      iterations: [
        { content: 'Apple', assessment: 'A fruit', pass: true, index: 0 },
        { content: 'Carrot', assessment: 'A vegetable', pass: false, index: 1 },
        { content: 'Calcium', assessment: 'A mineral', pass: false, index: 2 },
      ],
    });
    expect(stripAnsi(message)).toMatchInlineSnapshot(`
      "expect(received).toGenerate(requirement)

      Expected: \\"A fruit\\"
      Received:
        - \\"Carrot\\" // A vegetable
        - \\"Calcium\\" // A mineral"
    `);
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderMessage('jest', {
      requirement: 'A fruit',
      name: MatcherName.Generate,
      isNot: true,
      iterations: [
        { content: 'Apple', assessment: 'A fruit', pass: true, index: 0 },
        { content: 'Banana', assessment: 'A fruit', pass: true, index: 1 },
        { content: 'Kale', assessment: 'A vegetable', pass: false, index: 2 },
      ],
    });
    expect(stripAnsi(message)).toMatchInlineSnapshot(`
      "expect(received).not.toGenerate(requirement)

      Expected: not \\"A fruit\\"
      Received:
        - \\"Apple\\" // A fruit
        - \\"Banana\\" // A fruit"
    `);
  });

  it('Should render a message for a negated failed test', async () => {
    const message = renderMessage('jest', {
      requirement: 'A fruit',
      name: MatcherName.Generate,
      isNot: true,
      iterations: [
        { content: 'Apple', assessment: 'A fruit', pass: true, index: 0 },
        { content: 'Carrot', assessment: 'A vegetable', pass: false, index: 1 },
        { content: 'Calcium', assessment: 'A mineral', pass: false, index: 2 },
      ],
    });
    expect(stripAnsi(message)).toMatchInlineSnapshot(`
      "expect(received).not.toGenerate(requirement)

      Expected: not \\"A fruit\\"
      Received:
        - \\"Apple\\" // A fruit"
    `);
  });
});
