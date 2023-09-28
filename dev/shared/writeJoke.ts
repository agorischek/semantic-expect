import { OpenAI } from 'openai';
import { draw } from 'radash';
import { dedent } from 'ts-dedent';

import { parseList, trimResponse } from './utils.js';

export async function writeJoke(subject?: string) {
  const openai = new OpenAI();
  const resolvedSubject =
    subject.replace(/^about\s+/i, '') ??
    draw(['computers', 'animals', 'food', 'work', 'home appliances']);
  const topicsCompletion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: dedent`
    
      Here are 6 words related to ${resolvedSubject} as a newline-separated list.
      **DO NOT** include numbers in front of items!
      Items:`,
    temperature: 0.3,
    max_tokens: 30,
  });
  const topics = parseList(topicsCompletion.choices[0].text);

  const topic = draw(topics);
  const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: dedent`
      Please write a joke.
      It **must** be about ${resolvedSubject}, specifically mentioning ${topic}. 
      Do not include any commentary, just the joke.
      Keep the joke short.
      The joke **must** make sense!
      Joke about ${resolvedSubject}:`,
    temperature: 0.4,
    max_tokens: 30,
  });
  const trimmed = trimResponse(completion.choices[0].text);
  return trimmed;
}
