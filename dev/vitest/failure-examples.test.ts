import { describe, expect, it } from 'vitest';

describe('toDefinitely', () => {
  it('Should detect business jargon', async () => {
    const description =
      "Let's circle back and cross-synergize the leveraged assets!";
    await expect(description).toDefinitely('be business jargon-free');
  });

  it('Should detect a color', async () => {
    const description = 'The ball is large, round, and blue.';
    await expect(description).toDefinitely('not include any colors');
  });

  it('Should detect a planet', async () => {
    const description = "Let's fly to Mars!";
    await expect(description).toDefinitely('mention three planets');
  });

  it('Should detect language', async () => {
    const utterance = 'Hello World';
    await expect(utterance).toDefinitely('use Spanish');
  });

  it('Should detect a movie', async () => {
    const utterance = 'A New Hope';
    await expect(utterance).not.toDefinitely('reference the original');
  });
});
