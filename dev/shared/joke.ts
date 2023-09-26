import { OpenAI } from 'openai';
import { draw } from 'radash';

export async function joke(subject?: string) {
  const openai = new OpenAI();
  const resolvedSubject =
    subject ??
    draw(['computers', 'animals', 'food', 'work', 'home appliances']);
  const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: `Here's a joke about ${resolvedSubject}:`,
    temperature: 1,
    max_tokens: 30,
  });
  return completion.choices[0].text.trim().replace('\n', '');
}
