import { OpenAI } from 'openai';
import { describe, expect, it } from 'vitest';

import { makeOpenAIChatDeterminer } from '../openAIChat.js';

const model = new OpenAI();
const determine = makeOpenAIChatDeterminer(model);

describe('Determiners', () => {
  describe('OpenAI Chat Determiner', () => {
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
        content: "Hello, I'm a programmer. I love TypeScript!",
        requirement: 'Only one sentence',
      });
      expect(pass).toBe(false);
      expect(assessment).toMatch('two sentences');
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
  });
});
