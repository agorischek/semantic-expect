import { describe, expect, it } from 'vitest';

import { MatcherName } from '../../types/matchers.js';
import { renderDefinitelyMessage } from '../message.js';

describe('Unformatted message renderer', () => {
  it('Should render a message for a passed test', async () => {
    const message = renderDefinitelyMessage('unformatted', {
      content: 'Hello World',
      requirement: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toDefinitely',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(
      "\"'Hello World' should 'Use English' (Uses English)\"",
    );
  });

  it('Should render a message for a failed test', async () => {
    const message = renderDefinitelyMessage('unformatted', {
      content: 'Hello World',
      requirement: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: 'toDefinitely',
      isNot: false,
    });
    expect(message).toMatchInlineSnapshot(
      "\"'Hello World' should 'Use Spanish' (Uses English)\"",
    );
  });

  it('Should render a message for a negated passed test', async () => {
    const message = renderDefinitelyMessage('unformatted', {
      content: 'Hello World',
      requirement: 'Use English',
      assessment: 'Uses English',
      pass: true,
      name: 'toDefinitely',
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(
      "\"'Hello World' should not 'Use English' (Uses English)\"",
    );
  });

  it('Should render a message for a failed test', async () => {
    const message = renderDefinitelyMessage('unformatted', {
      content: 'Hello World',
      requirement: 'Use Spanish',
      assessment: 'Uses English',
      pass: false,
      name: MatcherName.Definitely,
      isNot: true,
    });
    expect(message).toMatchInlineSnapshot(
      "\"'Hello World' should not 'Use Spanish' (Uses English)\"",
    );
  });
});
