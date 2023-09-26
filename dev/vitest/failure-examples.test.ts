import { OpenAI } from 'openai';
// import { draw } from 'radash';
import { describe, expect, it } from 'vitest';

describe('toConsistently', () => {
  it('Should work', async () => {
    const openai = new OpenAI();
    const generator = async () => {
      const completion = await openai.completions.create({
        model: 'gpt-3.5-turbo-instruct',
        prompt: "Here's a color of the rainbow:",
        temperature: 1,
        max_tokens: 5,
      });
      return completion.choices[0].text.trim().replace('\n', ' ');
    };
    // const generator = async () => draw(['a', 'bv']);
    await expect(generator).toConsistently('Be an animal', 4);
  });
});

describe.skip('toDefinitely', () => {
  it('Should detect business jargon', async () => {
    const description =
      "Let's circle back and cross-synergize the leveraged assets!";
    await expect(description).toDefinitely('Be business jargon-free');
  });

  it('Should detect a color', async () => {
    const description = 'The ball is large, round, and blue.';
    await expect(description).toDefinitely('Not include any colors');
  });

  it('Should detect a planet', async () => {
    const description = "Let's fly to Mars!";
    await expect(description).toDefinitely('Mention three planets');
  });

  it('Should detect language', async () => {
    const utterance = 'Hello World';
    await expect(utterance).toDefinitely('Use Spanish');
  });

  it('Should detect a movie', async () => {
    const utterance = 'A New Hope';
    await expect(utterance).not.toDefinitely('Reference the original');
  });
});
