import { OpenAI } from 'openai';

import { CompleterFactory } from './../types/completers.js';
import { models } from '../defaults/models.js';

export const makeOpenAITextCompleter: CompleterFactory<OpenAI, string> = (
  openai,
  options,
) => {
  const completer = async (prompt: string) => {
    const response = await openai.completions.create({
      model: options?.model ?? models.openAIText,
      prompt,
      temperature: 0,
      max_tokens: 100,
    });
    const completion = response.choices[0].text;
    return completion;
  };
  return completer;
};
