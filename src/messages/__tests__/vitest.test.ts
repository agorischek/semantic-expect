import { describe, expect, it } from 'vitest';

import { MatcherName } from '../../types/matchers.js';
import { renderDefinitelyMessage } from '../message.js';

describe('Vitest message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderDefinitelyMessage('vitest', {
      content: 'Hello World',
      requirement: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: MatcherName.Definitely,
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' to 'Use English' (Uses English)\"",
    );
  });

  it('Should render a message for a failed test', async () => {
    const message = renderDefinitelyMessage('vitest', {
      content: 'Hello World',
      requirement: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toDefinitely',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' to 'Use Spanish' (Uses English)\"",
    );
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderDefinitelyMessage('vitest', {
      content: 'Hello World',
      requirement: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toDefinitely',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' not to 'Use English' (Uses English)\"",
    );
  });

  it('Should render a message for a failed test', async () => {
    const message = renderDefinitelyMessage('vitest', {
      content: 'Hello World',
      requirement: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toDefinitely',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(
      "\"expected 'Hello World' not to 'Use Spanish' (Uses English)\"",
    );
  });
});
