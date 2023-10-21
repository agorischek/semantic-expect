import { OpenAI } from 'openai';
import { describe, expect, it } from 'vitest';

import { makeOpenAIChatDeterminer } from '../openAIChat.js';

const model = new OpenAI();
const determine = makeOpenAIChatDeterminer(model);

describe.concurrent('Determiners', () => {
  it('should detect a fruit', async () => {
    const { assessment, pass } = await determine({
      requirement: 'Content mentioning fruit',
      content: 'I need to pick up bananas and bread.',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('bananas');
  });

  it('should detect negative sentiment', async () => {
    const { assessment, pass } = await determine({
      content: 'This is absolutely awful!!',
      requirement: 'Positive sentiment',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('negative sentiment');
  });

  it('should detect colors', async () => {
    const { assessment, pass } = await determine({
      content: 'Circles, squares, and triangles.',
      requirement: 'No mention of colors',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('colors');
  });

  it('should detect food', async () => {
    const { assessment, pass } = await determine({
      content:
        'Why did the tomato turn red? Because it saw the salad dressing!',
      requirement: 'A joke about furniture',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('food');
  });

  it('should detect literal word', async () => {
    const { assessment, pass } = await determine({
      content: 'Hi',
      requirement: 'Bye',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('Does not');
  });

  it('should detect French', async () => {
    const { assessment, pass } = await determine({
      content: 'Bonjour le monde.',
      requirement: 'English',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('French');
  });

  it('should detect French', async () => {
    const { assessment, pass } = await determine({
      content: 'Bonjour le monde.',
      requirement: 'French',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('French');
  });

  it('should detect sentences', async () => {
    const { assessment, pass } = await determine({
      content: "Hello, I'm a programmer. I love TypeScript. Do you?",
      requirement: 'Exactly one sentence',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('three sentences');
  });

  it('should detect a sentence', async () => {
    const { assessment, pass } = await determine({
      content: 'Unit testing is awesome.',
      requirement: 'Exactly three sentences',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('one sentence');
  });

  it('should detect a color', async () => {
    const { assessment, pass } = await determine({
      content: 'Yellow',
      requirement: 'A color',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('Is a color');
  });

  it('should detect a color', async () => {
    const { assessment, pass } = await determine({
      content: 'The ball is round',
      requirement: 'Content mentioning a shape',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('shape');
  });

  it('should detect a color', async () => {
    const { assessment, pass } = await determine({
      content: 'This is great!',
      requirement: 'A color',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('a color');
  });

  it('should detect a compliment', async () => {
    const { assessment, pass } = await determine({
      content: 'You did great!',
      requirement: 'A compliment',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('a compliment');
  });

  it('should detect a compliment', async () => {
    const { assessment, pass } = await determine({
      content: 'That was terrible...',
      requirement: 'A compliment',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('a criticism');
  });

  it('should detect an expression of admiration', async () => {
    const { assessment, pass } = await determine({
      content: 'I look up to you',
      requirement: 'An expression of admiration',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('admiration');
  });

  it('should detect a speaking style', async () => {
    const { assessment, pass } = await determine({
      content: 'Ahoy, matey!',
      requirement: 'A pirate phrase',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('Is a pirate phrase');
  });

  it('should detect a speaking style', async () => {
    const { assessment, pass } = await determine({
      content: 'Beep boop!',
      requirement: 'A pirate phrase',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('Is a robot phrase');
  });

  it('should detect a subject', async () => {
    const { assessment, pass } = await determine({
      content: 'Quantum entanglement',
      requirement: 'A biology topic',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('Is a physics topic');
  });

  it('should detect a subject', async () => {
    const { assessment, pass } = await determine({
      content: 'Inflation',
      requirement: 'An economics topic',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('inflation');
  });

  it('should detect a sentence', async () => {
    const { assessment, pass } = await determine({
      content: 'Orange',
      requirement: 'A full sentence',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('one word');
  });

  it('should detect a sentence', async () => {
    const { assessment, pass } = await determine({
      content: 'I went to the store',
      requirement: 'A full sentence',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('a full sentence');
  });

  it('should detect a lie', async () => {
    const { assessment, pass } = await determine({
      content: 'Purple is a shape',
      requirement: 'An accurate statement',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('inaccurate statement');
  });

  it('should detect a fact', async () => {
    const { assessment, pass } = await determine({
      content: 'The sky is blue',
      requirement: 'An accurate statement',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('accurate');
  });

  it('should detect a fact', async () => {
    const { assessment, pass } = await determine({
      content: 'The sky is blue',
      requirement: 'An inaccurate statement',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch(/accurate/i);
  });

  it('should detect a mention', async () => {
    const { assessment, pass } = await determine({
      content: 'The sun is bright',
      requirement: 'A mention of the moon',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('moon');
  });

  it('should detect a mention', async () => {
    const { assessment, pass } = await determine({
      content: 'Bananas are yellow',
      requirement: 'A mention of bananas',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('bananas');
  });

  it('should detect a mention', async () => {
    const { assessment, pass } = await determine({
      content: 'The water is blue',
      requirement: 'A mention of the sky',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('sky');
  });

  it('should detect multiple mentions', async () => {
    const { assessment, pass } = await determine({
      content: "Let's fly to Mars!",
      requirement: 'A statement about Jupiter',
    });
    expect(pass).toBe(false);
    console.log(assessment);
    expect(assessment).toMatch('Mars');
  });

  it('should detect tone', async () => {
    const { assessment, pass } = await determine({
      content: "Hey what's up?",
      requirement: 'Something casual',
    });
    expect(pass).toBe(true);
    expect(assessment).toMatch('casual');
  });

  it('should detect tone', async () => {
    const { assessment, pass } = await determine({
      content: "Hey what's up?",
      requirement: 'Something formal',
    });
    expect(pass).toBe(false);
    expect(assessment).toMatch('casual');
  });
});
