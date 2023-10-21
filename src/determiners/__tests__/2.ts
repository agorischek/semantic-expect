import OpenAI from 'openai';

import { makeOpenAIChatDeterminer } from '../openAIChat.js';
import { cases, flatten } from './cases.js';

const model = new OpenAI();
const determine = makeOpenAIChatDeterminer(model);

describe('myFunction', () => {
  test.each(flatten(cases))(
    'should detect %s',
    async (subject, requirement, content, result, contains) => {
      const { assessment, pass } = await determine({
        requirement,
        content,
      });
      expect(pass).toBe(result);
      expect(assessment).toMatch(contains);
    },
  );
});
